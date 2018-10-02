import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES
} from "../actionTypes";

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
        movies: action.movies
      };

    case STORE_CONFIGURATION:
      return {
        ...state,
        configuration: action.configuration
      };

    case STORE_GENRES:
      return {
        ...state,
        genres: action.genres
      };

    default:
      return state;
  }
};

export default dataReducer;