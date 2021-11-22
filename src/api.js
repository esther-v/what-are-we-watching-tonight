//base url
const base_url = 'https://imdb-api.com/en/API/';

require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

//create url
const popular_movies = `MostPopularMovies/${apiKey}`

export const popularMoviesURL = () => `${base_url}${popular_movies}`

