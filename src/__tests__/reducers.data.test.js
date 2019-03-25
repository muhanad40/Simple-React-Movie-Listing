import reducer from '../reducers/data';
import mockNowPlayingMovies from '../__mocks__/now_playing.json';
import mockConfiguration from '../__mocks__/configuration.json';
import mockGenres from '../__mocks__/genres.json';
import {
  STORE_NOW_PLAYING,
  STORE_CONFIGURATION,
  STORE_GENRES,
  STORE_AVAILABLE_GENRES,
  FILTER_BY_GENRE,
  CLONE_MOVIES_FOR_FILTERING,
  FILTER_BY_RATING
} from '../actionTypes';
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

    expect(newState.genres).toEqual(mockGenres.genres);
  });

  it('should store unique movie genres', () => {
    const expectedGenres = [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Drama'
      },
      {
        id: 4,
        name: 'Horror'
      }
    ];
    const initState = {
      genres: [
        {
          id: 1,
          name: 'Action'
        },
        {
          id: 2,
          name: 'Drama'
        },
        {
          id: 3,
          name: 'Adventure'
        },
        {
          id: 4,
          name: 'Horror'
        },
        {
          id: 5,
          name: 'Thriller'
        },
      ],
      availableGenres: [],
    };

    const newState = reducer(initState, {
      type: STORE_AVAILABLE_GENRES,
      genreIds: [1,2,1,4,1,2]
    });

    expect(newState.availableGenres).toEqual(expectedGenres);
  });

  it('should clone movies for filtering', () => {
    const initState = {
      movies: [1,2,3],
      filteredMovies: []
    };

    const newState = reducer(initState, {
      type: CLONE_MOVIES_FOR_FILTERING
    });

    expect(newState.filteredMovies).toEqual(initState.movies);
  });

  it('should filter movies list based on genre', () => {
    const initState = {
      movies: [
        {
          name: 'Movie 1',
          genre_ids: [1, 3]
        },
        {
          name: 'Movie 2',
          genre_ids: [2, 1, 3]
        },
        {
          name: 'Movie 3',
          genre_ids: [4, 2]
        }
      ],
      filteredMovies: [],
    };

    const newState = reducer(initState, {
      type: FILTER_BY_GENRE,
      genreIds: [1, 2, 3]
    });

    expect(newState.filteredMovies).toEqual([
      initState.movies[1]
    ]);
  });

  it('should filter movies list based on minimum rating value', () => {
    const initState = {
      movies: [
        {
          name: 'Movie 1',
          vote_average: 4
        },
        {
          name: 'Movie 2',
          vote_average: 5.5
        },
        {
          name: 'Movie 3',
          vote_average: 3
        }
      ],
      filteredMovies: [],
    };

    const newState = reducer(initState, {
      type: FILTER_BY_RATING,
      minRating: 4
    });

    expect(newState.filteredMovies).toEqual([
      initState.movies[0],
      initState.movies[1]
    ]);
  });
});