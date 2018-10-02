import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES,
  FILTER_BY_GENRE,
  CLONE_MOVIES_FOR_FILTERING
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
      console.log(action.genreIds)
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

      return {
        ...state,
        filteredMovies
      }

    default:
      return state;
  }
};

export default dataReducer;