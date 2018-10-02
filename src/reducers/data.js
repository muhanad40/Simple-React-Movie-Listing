import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES
} from "../actionTypes";
import normaliseMovies from '../normalisers/normaliseMovies';

const initialState = {
  configuration: {},
  movies: [],
  genres: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_NOW_PLAYING:
      return {
        ...state,
        movies: normaliseMovies(action.movies, state.configuration)
      };

    case STORE_CONFIGURATION:
      return {
        ...state,
        configuration: action.configuration
      };

    case STORE_GENRES:
      return {
        ...state,
        genres: action.genres.genres
      };

    default:
      return state;
  }
};

export default dataReducer;