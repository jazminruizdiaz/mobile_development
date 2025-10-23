import { Genre } from '../types/Movie';
import { useTMDB } from './useTMDB';

export const useGenres = (enabled = true) => {
  return useTMDB<{ genres: Genre[] }>(
    '/genre/movie/list',
    { language: 'en-US' },
    enabled,
  );
};
