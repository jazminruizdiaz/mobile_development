import { useTMDB } from './useTMDB';
import { Movie } from '../types/Movie';

export const useMoviesByCompany = (companyId: number, enabled = true) => {
  return useTMDB<{ results: Movie[] }>('/discover/movie', {
    with_companies: companyId,
    language: 'en-US',
    page: 1,
  }, enabled);
};