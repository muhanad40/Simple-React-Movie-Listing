import { getGenre, getGenres } from "../utils";

const mockGenres = [
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
];

describe('Utils - getGenre', () => {
  it('should get genre object by ID', () => {
    expect(getGenre(2, mockGenres)).toEqual(mockGenres[1]);
  });
});

describe('Utils - getGenres', () => {
  it('should get list of genre objects by IDs', () => {
    const genreIds = [3, 5];

    expect(getGenres(genreIds, mockGenres)).toEqual([
      mockGenres[2],
      mockGenres[4]
    ]);
  });
});
