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
    const {popular} =  useSelector(state => state.movies)
    console.log(popular)

    return(
        <>
            <h2>hello</h2>
        </>
    )
}

export default Home