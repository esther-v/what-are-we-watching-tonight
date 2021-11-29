import styled from "styled-components"
import { loadDetail } from "../actions/detailAction"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Movie = ({title,image,released,id}) => {

    //load details
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(id))
    }

    return(
        <StyledMovie onClick={loadDetailHandler}>
            <Link to={`/movie/${id}`}>
                <img src={image} alt={title}/>
                
                <h3>{title}</h3>
                <p>{released}</p>
            </Link>
        </StyledMovie>
    )
}

const StyledMovie = styled.div`
    appearance: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    color: #c7ecee;
    background-color: #30336b;
    padding-bottom: 10px;
    cursor: pointer;
    box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3),
                12px 12px 16px rgba(255,255,255,0.25);
    
    &:hover{
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
                inset -6px -6px 10px 0 rgba(255,255,255,0.25);
    }
    img{
        width: 80%;
        height: 254px;
        object-fit: cover;
    }
    h3{
        text-align:center;
        margin: 5px 0;
        color: white;
        text-decoration: none;
    }
    p{
        font-family: 'Raleway', sans-serif;
        color: white;
        text-decoration: none;
    }
    
`

export default Movie