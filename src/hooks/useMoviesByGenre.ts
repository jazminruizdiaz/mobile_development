import { useTMDB } from './useTMDB';
import { Movie } from '../types/Movie';

export const useMoviesByGenre = (genreId: number, enabled = true) => {
  return useTMDB<{ results: Movie[] }>('/discover/movie', {
    with_genres: genreId,
    language: 'en-US',
    page: 1,
  }, enabled);
};