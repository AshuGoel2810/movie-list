import axios from "axios";
const API_KEY = "cb40639e8acb586f117aae63f957e6a3";
const BASE_URL = "https://api.themoviedb.org/3";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";


export const fetchMovies = (query = "", page = 1) => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    try {
        const url = query
            ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
            : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

        const response = await axios.get(url);
        dispatch({
            type: FETCH_MOVIES_SUCCESS, payload: {
                movies: response.data.results,
                totalPages: response.data.total_pages, 
            },
        });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
};
