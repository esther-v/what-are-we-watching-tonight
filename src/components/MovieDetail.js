import styled from "styled-components"
import { useSelector } from "react-redux"

const MovieDetail = () => {
    //data
    const {movie, isLoading} = useSelector(state => state.detail)
    return(
        <>
        <CardShadow>
            <Detail>
                <div className="presentation">
                    <div className="titre">
                        <h1>Titre{movie.title}</h1>
                        <h4>Année{movie.year}</h4>
                    </div>
                    <img src={movie.image} alt={movie.name} />    
                </div>
                <p>Directed by {movie.directors}</p>
                <p>Runtime : {movie.runtimeStr}</p>
                <p>Synopsis : {movie.plot}</p>
                <p>Actors : 
                    {movie.actorList.map((data) => (
                        <span key={data.actorList.id} >{data.actorList.name}</span>
                    ))}
                </p>
                <h3>Genres : {movie.genres}</h3>
            </Detail>
        </CardShadow>
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
    }
`

export default MovieDetail