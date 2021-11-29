import styled from "styled-components"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const MovieDetail = () => {

    const history = useHistory()
    //exit detail
    const exitDetailHandler = (e) => {
        const element = e.target
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    //data
    const {movie, isLoading} = useSelector(state => state.detail)
    console.log(movie)
    return(
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail>
                    <div className="presentation">
                        <div className="titre">
                            <h1>{movie.data.title}</h1>
                            <h4>{movie.data.year}</h4>
                        </div>
                        <img src={movie.data.image} alt={movie.name} />    
                    </div>
                    <h3>Directed by {movie.data.directors}</h3>
                    
                    <p>Description : <br /> {movie.data.plot}</p>
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
    margin: 0 auto;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    top: 10%;
    /* min-height: 100vh; */
    .presentation{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        img{
            width: 20%;
            margin-left: 50px;
        }
    }
    p{
        margin: 20px 0;
    }
    h3, h4{
        font-family: 'Raleway', sans-serif;
        color: #30336b;
    }
    h1{
        font-size: 45px;
        font-weight: 600;
    }
    h4{
        text-align: center;
        margin-top: 20px;
        font-size: 25px;
    }
`

export default MovieDetail