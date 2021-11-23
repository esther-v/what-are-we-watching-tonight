import React, {useEffect} from 'react'
//redux
import {useDispatch, useSelector} from 'react-redux';
import {loadMovies} from "../actions/moviesActions";


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
    console.log(popularMovies)
    //filter the 20 first Tv shows
    const popularTvShows = popularTv.filter((show) => {
        if(show.rank < 21) {
            return true
        } else {
            return false
        }
    })
    console.log(popularTvShows)

    return(
        <>
            <h2>Popular Movies - Top 20</h2>
            {popularMovies.map(item => {
                return (
                    <h3>{item.title}</h3>
                )
            })}

            <h2>Popular TV Shows - Top 20</h2>
            {popularTvShows.map(item => {
                return (
                    <h3>{item.title}</h3>
                )
            })}
        </>
    )
}

export default Home
