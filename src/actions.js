import path from 'path';

import {
  GET_NOW_PLAYING,
  STORE_NOW_PLAYING,
  GET_CONFIGURATION,
  STORE_CONFIGURATION,
  GET_GENRES,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES,
  CLONE_MOVIES_FOR_FILTERING,
  FILTER_BY_GENRE,
  FILTER_BY_RATING
} from './actionTypes';

export const API = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'd8c0f9e129780554d39905018e863c97',
  addBase(endpoint) {
    return path.join(this.baseUrl, endpoint) + `?api_key=${this.apiKey}`;
  },
  get nowPlaying() {
    return this.addBase('/movie/now_playing');
  },
  get configuration() {
    return this.addBase('/configuration');
  },
  get genres() {
    return this.addBase('/genre/movie/list');
  }
}

const getMoviesGenreIds = (movies) => {
  let genreIds = [];

  movies.forEach(movie => {
    genreIds = genreIds.concat(movie.genre_ids);
  });

  return Array.from(new Set(genreIds));
};

export function storeNowPlaying(movies) {
  return {
    type: STORE_NOW_PLAYING,
    movies
  };
}

export function cloneMoviesForFiltering() {
  return {
    type: CLONE_MOVIES_FOR_FILTERING
  };
}

export const getNowPlaying = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NOW_PLAYING
    });

    return fetch(API.nowPlaying)
      .then(res => res.json())
      .then(movies => {
        dispatch(storeNowPlaying(movies.results));
        dispatch(cloneMoviesForFiltering());
        dispatch(storeAvailableGenres(getMoviesGenreIds(movies.results)));
      });
  }
}

export const storeConfiguration = (configuration) => {
  return {
    type: STORE_CONFIGURATION,
    configuration
  };
}

export const getConfiguration = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CONFIGURATION
    });

    return fetch(API.configuration)
      .then(res => res.json())
      .then(configuration => dispatch(storeConfiguration(configuration)));
  }
}

export const getGenres = () => {
  return (dispatch) => {
    dispatch({
      type: GET_GENRES
    });

    return fetch(API.genres)
      .then(res => res.json())
      .then(genres => dispatch(storeGenres(genres)));
  }
}

export const storeGenres = (genres) => {
  return {
    type: STORE_GENRES,
    genres
  };
}

export const storeAvailableGenres = (genreIds) => {
  return {
    type: STORE_AVAILABLE_GENRES,
    genreIds
  };
}

export const filterByGenre = (genreIds) => {
  return {
    type: FILTER_BY_GENRE,
    genreIds
  };
};

export const filterByRating = (minRating) => {
  return {
    type: FILTER_BY_RATING,
    minRating
  };
};
