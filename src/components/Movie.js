import styled from "styled-components"

const Movie = ({title,image,released}) => {
    return(
        <StyledMovie>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{released}</p>
        </StyledMovie>
    )
}

const StyledMovie = styled.div`
    border-radius: 1rem;
    /* img{
        width: 100%;
        height: 100px;
        object-fit:cover
    } */
`

export default Movie