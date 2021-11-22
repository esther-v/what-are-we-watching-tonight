import axios from "axios";
import { popularMoviesURL } from "../api";

export const loadMovies = () => async (dispatch) => {
    //fetch axios
    const popularData = await axios.get(popularMoviesURL())
    
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: popularData.data.items
        }
    })
}