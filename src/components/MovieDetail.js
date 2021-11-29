import styled from "styled-components"
import { useSelector } from "react-redux"

const MovieDetail = () => {
    //data
    const {movie, isLoading} = useSelector(state => state.detail)
    console.log(movie)
    return(
        <>
        {!isLoading && (

        
        <CardShadow>
            <Detail>
                <div className="presentation">
                    <div className="titre">
                        <h1>{movie.data.title}</h1>
                        <h4>{movie.data.year}</h4>
                    </div>
                    <img src={movie.data.image} alt={movie.name} />    
                </div>
                <h3>Directed by {movie.data.directors}</h3>
                
                <p>Description : {movie.data.plot}</p>
                <p className="actors">Actors : 
                    <span> {movie.data.stars}</span>
                </p>
                <h3>Genres : {movie.data.genres}</h3>
                <p>{movie.data.runtimeStr}</p>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left: 0;
`

const Detail = styled.div`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    .presentation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 20%;
        }
    }
    p{
        margin: 20px 0;
    }
    h3, h4{
        font-family: 'Raleway', sans-serif;
    }
`

export default MovieDetail