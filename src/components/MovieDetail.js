import styled from "styled-components"
import { useSelector } from "react-redux"

const MovieDetail = () => {
    //data
    const {movie, isLoading} = useSelector(state => state.detail)
}

export default MovieDetail