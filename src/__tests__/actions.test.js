import { API,
  getNowPlaying,
  getConfiguration,
  getGenres
} from '../actions';
import {
  GET_NOW_PLAYING,
  STORE_NOW_PLAYING,
  GET_CONFIGURATION,
  STORE_CONFIGURATION,
  GET_GENRES,
  STORE_GENRES
} from '../actionTypes';
import mockNowPlayingData from '../__mocks__/now_playing.json';
import mockConfigurationData from '../__mocks__/configuration.json';
import mockGenresData from '../__mocks__/genres.json';

describe('Actions', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch now playing movies and dispatch store action', () => {
    const mockDispatch = jest.fn();
    fetch.mockResponseOnce(JSON.stringify(mockNowPlayingData))

    const promise = getNowPlaying()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_NOW_PLAYING
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API.nowPlaying);
    promise.then(() => {
      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: STORE_NOW_PLAYING,
        movies: mockNowPlayingData.results
      });
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });

  it('should fetch configuration', () => {
    const mockDispatch = jest.fn();
    fetch.mockResponseOnce(JSON.stringify(mockConfigurationData))

    const promise = getConfiguration()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_CONFIGURATION
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API.configuration);
    promise.then(() => {
      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: STORE_CONFIGURATION,
        configuration: mockConfigurationData
      });
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });

  it('should fetch genres', () => {
    const mockDispatch = jest.fn();
    fetch.mockResponseOnce(JSON.stringify(mockGenresData))

    const promise = getGenres()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_GENRES
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API.genres);
    promise.then(() => {
      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: STORE_GENRES,
        genres: mockGenresData
      });
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });
});