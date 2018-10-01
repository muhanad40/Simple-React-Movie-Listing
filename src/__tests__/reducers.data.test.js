import reducer from '../reducers/data';
import mockNowPlayingMovies from '../__mocks__/now_playing.json';
import { STORE_NOW_PLAYING } from '../actionTypes';

describe('Data reducer', () => {
  it('should store movies', () => {
    const initState = {
      movies: []
    };

    const newState = reducer(initState, {
      type: STORE_NOW_PLAYING,
      movies: mockNowPlayingMovies
    });

    expect(newState.movies).toEqual(mockNowPlayingMovies);
  });
});