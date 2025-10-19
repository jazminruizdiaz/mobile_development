import { Movie } from '../types/Movie';
import { useTMDB } from './useTMDB';

export const useSearchMoviesByName = (query: string, enabled: boolean) => {
  return useTMDB<{ results: Movie[] }>(
    '/search/movie',
    {
      query,
      language: 'en-US',
      page: 1,
    },
    enabled,
  );
};
