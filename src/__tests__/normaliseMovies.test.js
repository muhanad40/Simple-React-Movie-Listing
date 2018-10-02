import path from 'path';

import mockNowPlayingMovies from '../__mocks__/now_playing.json';
import normaliseMovie from '../normalisers/normaliseMovie';
import normaliseMovies from '../normalisers/normaliseMovies';

jest.mock('../normalisers/normaliseMovie', () => {
  return jest.fn();
})

describe('normaliseMovies', () => {
  const movies = mockNowPlayingMovies.results;
  let normalised;
  let config = {
    images: {
      base_url: 'http://base-url.com',
      poster_sizes: [
        'w100',
        'w120',
        'w130',
        'w140'
      ]
    }
  }

  beforeAll(() => {
    normalised = normaliseMovies(movies, config);
  });

  it('should call `normaliseMovie` normaliser function on each movie object', () => {
    expect(normaliseMovie).toHaveBeenCalledTimes(movies.length);
    normaliseMovie.mock.calls.forEach((normaliseCall, callIndex) => {
      expect(normaliseCall[0]).toEqual(movies[callIndex]);
    });
  });
});