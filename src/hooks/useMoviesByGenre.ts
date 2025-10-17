import { useTMDB } from "./useTMDB";

export const useMoviesByGenre = (genreId: number) => {
    const endpoint = "/discover/movie";
    const params = {with_genres: genreId,
        language: 'en-US',
        page: 1,}
};