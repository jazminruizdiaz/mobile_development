import { useTMDB } from "./useTMDB";

export const useMovieDetails = (movie_id: number) => {
    const endpoint = `/movie/${movie_id}`;
    const params = {language: 'en-US',}
};