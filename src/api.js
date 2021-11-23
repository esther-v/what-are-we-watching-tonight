//base url
const base_url = 'https://imdb-api.com/en/API/';

require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

//create the urls
const popular_movies = `MostPopularMovies/${apiKey}`
const popular_tvshows = `MostPopularTVs/${apiKey}`

export const popularMoviesURL = () => `${base_url}${popular_movies}`
export const popularTvshowsURL = () => `${base_url}${popular_tvshows}`
 