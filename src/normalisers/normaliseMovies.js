import normaliseMovie from './normaliseMovie';

export default function normaliseMovies(list, ...args) {
  return list.map((movie) => normaliseMovie(movie, ...args));
}