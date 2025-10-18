import { DetailMovie } from '../types/DetailMovie';
import { useTMDB } from './useTMDB';

export const useMovieDetails = (movieId: number, enabled = true) => {
  return useTMDB<DetailMovie>(
    `/movie/${movieId}`,
    { language: 'en-US' },
    enabled
  );
};