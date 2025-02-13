import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./action";

const initialState = {
    loading: false,
    movies: [],
    error: null,
    totalPages: 1,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.movies,
                totalPages: action.payload.totalPages,
                error: null,
            };
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;