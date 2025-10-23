import { useTMDB } from "./useTMDB";
import { MovieCast } from "../types/MovieCast";



export const useMovieCredits = (movieId: number, enabled = true) => {
  return useTMDB<MovieCast>(
    `/movie/${movieId}/credits`,
    { language: 'en-US' },
    enabled,
  );
};
