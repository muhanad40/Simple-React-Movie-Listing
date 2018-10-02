import path from 'path';

export default function normaliseMovie(movie, config = {}) {
  const posterSize = config.images.poster_sizes[3];

  return {
    ...movie,
    poster_path: path.join(config.images.base_url, posterSize, movie.poster_path)
  }
}
