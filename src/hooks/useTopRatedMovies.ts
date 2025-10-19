import { useTMDB } from './useTMDB';
import { Movie } from '../types/Movie';

export const useTopRatedMovies = (enabled = true) => {
  return useTMDB<{ results: Movie[] }>('/movie/top_rated', {
    language: 'en-US',
    page: 1,
  }, enabled);
};