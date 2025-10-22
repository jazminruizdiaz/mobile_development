import { Genre } from '../types/Genre';
import { useTMDB } from './useTMDB';

export const useGenre = (enabled = true) => {
  return useTMDB<{ genres: Genre[] }>(
    '/genre/movie/list',
    { language: 'en-US' },
    enabled,
  );
};
