import React, {useEffect} from 'react'
import Movie from '../components/Movie'
//redux
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from "../actions/moviesActions"
import styled from 'styled-components'



const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])
    //get data back
    const {popular, popularTv} =  useSelector(state => state.movies)
    //filter the 20 first movies
    const popularMovies = popular.filter((movie) => {
        if(movie.rank < 21) {
            return true
        } else {
            return false
        }
    })
    
    //filter the 20 first Tv shows
    const popularTvShows = popularTv.filter((show) => {
        if(show.rank < 21) {
            return true
        } else {
            return false
        }
    })
    

    return(
        <MovieList>
            <h2>Popular Movies <span>Top 20</span></h2>
            <Movies>
                {popularMovies.map((item) => (
                    <Movie
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        released={item.year}
                    />       
                    )
                )}
            </Movies>

            <h2>Popular TV Shows <span>Top 20</span></h2>
            <Movies>
                {popularTvShows.map(item => (
                    <Movie
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        released={item.year}
                    />       
                    )    
                )}
            </Movies>
        </MovieList>
    )
}

const MovieList = styled.div`
    padding: 0 5rem;
    h2{
        padding: 3rem 0;
        font-family: 'Raleway', sans-serif;
        font-size: 32px;
        span{
            font-style:normal;
            color: #30336b;
            margin-left: 15px;
            font-family: 'Roboto Condensed', sans-serif;
        }
    }
`

const Movies = styled.div`
    min-height: 80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    margin-bottom: 50px;
`

export default Home
