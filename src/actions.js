import path from 'path';

import { GET_NOW_PLAYING, STORE_NOW_PLAYING } from './actionTypes';

export const API = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'd8c0f9e129780554d39905018e863c97',
  addKey(path) {
    return path + `?api_key=${this.apiKey}`;
  },
  get nowPlaying() {
    return this.addKey(path.join(this.baseUrl, '/movie/now_playing'));
  }
}

export function storeNowPlaying(movies) {
  return {
    type: STORE_NOW_PLAYING,
    movies: movies
  };
}

export const getNowPlaying = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NOW_PLAYING
    });

    return fetch(API.nowPlaying)
      .then(res => res.json())
      .then(movies => dispatch(storeNowPlaying(movies.results)));
  }
}
