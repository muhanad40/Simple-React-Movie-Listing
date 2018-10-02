import path from 'path';

import mockNowPlayingMovies from '../__mocks__/now_playing.json';
import normaliseMovie from '../normalisers/normaliseMovie';

describe('normaliseMovie', () => {
  const movieObj = mockNowPlayingMovies.results[0];
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
    normalised = normaliseMovie(movieObj, config);
  });

  it('should build image path using passed in config', () => {
    expect(normalised).toEqual({
      ...movieObj,
      poster_path: config.images.base_url + path.join(config.images.poster_sizes[3], movieObj.poster_path)
    });
  });
});