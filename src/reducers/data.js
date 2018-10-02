import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES
} from "../actionTypes";
import normaliseMovies from '../normalisers/normaliseMovies';
import { getGenres } from "../utils";

const initialState = {
  configuration: {},
  movies: [],
  genres: [],
  availableGenres: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_NOW_PLAYING:
      return {
        ...state,
        movies: normaliseMovies(action.movies, state.configuration)
      };

    case STORE_AVAILABLE_GENRES:
      const uniqueGenreIds = Array.from(new Set(action.genreIds));

      return {
        ...state,
        availableGenres: getGenres(uniqueGenreIds, state.genres),
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