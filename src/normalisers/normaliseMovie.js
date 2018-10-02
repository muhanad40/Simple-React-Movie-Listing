import path from 'path';

export default function normaliseMovie(movie, config = {}) {
  const posterSize = config.images.poster_sizes[3];

  return {
    ...movie,
    poster_path: config.images.base_url + path.join(posterSize, movie.poster_path)
  }
}
