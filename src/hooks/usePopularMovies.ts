import { useTMDB } from './useTMDB';
import { Movie } from '../types/Movie';

export const usePopularMovies = () => {
  return useTMDB<{ results: Movie[] }>('/movie/popular', {
    language: 'en-US',
    page: 1,
  });
};
