import { API,
  getNowPlaying,
  getConfiguration,
  getGenres,
  storeNowPlaying,
  storeConfiguration,
  storeGenres,
  storeAvailableGenres,
  filterByRating
} from '../actions';
import {
  GET_NOW_PLAYING,
  STORE_NOW_PLAYING,
  GET_CONFIGURATION,
  STORE_CONFIGURATION,
  GET_GENRES,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES,
  CLONE_MOVIES_FOR_FILTERING,
  FILTER_BY_RATING
} from '../actionTypes';
import mockNowPlayingData from '../__mocks__/now_playing.json';
import mockConfigurationData from '../__mocks__/configuration.json';
import mockGenresData from '../__mocks__/genres.json';

describe('Actions', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch now playing movies, dispatch store action and store available genres', () => {
    let promise = null;
    const mockDispatch = jest.fn();
    let expectedAvailableGenreIds = [];

    fetch.mockResponseOnce(JSON.stringify(mockNowPlayingData))

    mockNowPlayingData.results.forEach(movie => {
      expectedAvailableGenreIds = expectedAvailableGenreIds.concat(movie.genre_ids);
    });
    expectedAvailableGenreIds = Array.from(new Set(expectedAvailableGenreIds));
    promise = getNowPlaying()(mockDispatch);

    // Check we're calling initial action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_NOW_PLAYING
    });
    // Check that fetch is called correctly
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API.nowPlaying);
    promise.then(() => {
      // Check we're calling the action that store the movies
      expect(mockDispatch).toHaveBeenCalledWith({
        type: STORE_NOW_PLAYING,
        movies: mockNowPlayingData.results
      });
      // Check that we're cloning the movies for filtering
      expect(mockDispatch).toHaveBeenCalledWith({
        type: CLONE_MOVIES_FOR_FILTERING
      });
      // Check that we're calling the action that stores the unique genres
      expect(mockDispatch).toHaveBeenCalledWith({
        type: STORE_AVAILABLE_GENRES,
        genreIds: expectedAvailableGenreIds
      });
      expect(mockDispatch).toHaveBeenCalledTimes(4);
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

  it('should generate action to store now playing movies', () => {
    expect(storeNowPlaying(mockNowPlayingData)).toEqual({
      type: STORE_NOW_PLAYING,
      movies: mockNowPlayingData
    });
  });

  it('should generate action to store configuration', () => {
    expect(storeConfiguration(mockConfigurationData)).toEqual({
      type: STORE_CONFIGURATION,
      configuration: mockConfigurationData
    });
  });

  it('should generate action to store genres', () => {
    expect(storeGenres(mockGenresData)).toEqual({
      type: STORE_GENRES,
      genres: mockGenresData
    });
  });

  it('should generate action to store available genres', () => {
    const mockGenres = [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Drama'
      }
    ];
    expect(storeAvailableGenres(mockGenres)).toEqual({
      type: STORE_AVAILABLE_GENRES,
      genreIds: mockGenres
    });
  });

  it('should generate action to filter by rating', () => {
    expect(filterByRating(5)).toEqual({
      type: FILTER_BY_RATING,
      minRating: 5
    });
  })
});