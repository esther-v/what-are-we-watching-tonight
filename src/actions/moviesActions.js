import axios from "axios";
import { popularMoviesURL } from "../api";
import { popularTvshowsURL } from "../api";

export const loadMovies = () => async (dispatch) => {
    //fetch axios
    const popularData = await axios.get(popularMoviesURL())
    const popularTvData = await axios.get(popularTvshowsURL())
    
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: popularData.data.items,
            popularTv : popularTvData.data.items
        }
    })
}