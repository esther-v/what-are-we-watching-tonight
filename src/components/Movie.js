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
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    color: #c7ecee;
    background-color: #30336b;
    padding-bottom: 10px;
    cursor: pointer;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
                inset -6px -6px 10px 0 rgba(83, 92, 104,0.5);
    &:hover{
        box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3),
                12px 12px 16px rgba(83, 92, 104,0.25);
    }
    img{
        width: 80%;
        height: 254px;
        object-fit: cover;
    }
    h3{
        text-align:center;
    }
`

export default Movie