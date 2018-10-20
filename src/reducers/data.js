import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES,
  FILTER_BY_GENRE,
  CLONE_MOVIES_FOR_FILTERING,
  FILTER_BY_RATING
} from "../actionTypes";
import normaliseMovies from '../normalisers/normaliseMovies';
import { getGenres } from "../utils";

const initialState = {
  configuration: {},
  movies: [],
  genres: [],
  availableGenres: [],
  filteredMovies: []
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

      case FILTER_BY_GENRE:
      const filteredMovies = [];

      state.movies.forEach(movie => {
        action.genreIds.forEach(filterGenreId => {
          const isNotAddedYet = filteredMovies.indexOf(movie) === -1;

          if (movie.genre_ids.indexOf(filterGenreId) !== -1 && isNotAddedYet) {
            filteredMovies.push(movie);
          }
        });
      });

      return {
        ...state,
        filteredMovies
      }

    case CLONE_MOVIES_FOR_FILTERING:
      return {
        ...state,
        filteredMovies: state.movies.slice(0)
      };

    case FILTER_BY_RATING:
      return {
        ...state,
        filteredMovies: state.movies.filter(movie => movie.vote_average >= action.minRating)
      };

    default:
      return state;
  }
};

export default dataReducer;