import reducer from '../reducers/data';
import mockNowPlayingMovies from '../__mocks__/now_playing.json';
import mockConfiguration from '../__mocks__/configuration.json';
import mockGenres from '../__mocks__/genres.json';
import { STORE_NOW_PLAYING, STORE_CONFIGURATION, STORE_GENRES } from '../actionTypes';
import normaliseMovies from '../normalisers/normaliseMovies';

describe('Data reducer', () => {
  it('should store movies using the normaliser', () => {
    const initState = {
      configuration: {
        images: {
          base_url: 'http://base-url.com',
          poster_sizes: [
            'w100',
            'w120',
            'w130',
            'w140'
          ]
        }
      },
      movies: []
    };

    const newState = reducer(initState, {
      type: STORE_NOW_PLAYING,
      movies: mockNowPlayingMovies.results
    });
    const normalisedMovies = normaliseMovies(mockNowPlayingMovies.results, initState.configuration);

    expect(newState.movies).toEqual(normalisedMovies);
  });

  it('should store configuration', () => {
    const initState = {
      configuration: {},
    };

    const newState = reducer(initState, {
      type: STORE_CONFIGURATION,
      configuration: mockConfiguration
    });

    expect(newState.configuration).toEqual(mockConfiguration);
  });

  it('should store genres', () => {
    const initState = {
      genres: {},
    };

    const newState = reducer(initState, {
      type: STORE_GENRES,
      genres: mockGenres
    });

    expect(newState.genres).toEqual(mockGenres);
  });
});