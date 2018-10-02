export function getGenre(genreId, genres) {
  return genres.filter(genre => genre.id === genreId)[0];
}

export function getGenres(genreIds, genres) {
  return genreIds.map(genreId => {
      return getGenre(genreId, genres);
    })
}
