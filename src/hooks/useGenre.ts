import { useTMDB } from "./useTMDB";
import { Genre } from "../types/Movie";

export const useGenres = (enabled = true) => {
    return useTMDB<{ genres: Genre[] }>(
        '/genre/movie/list',
        { language: 'en-US' },
        enabled
    );
}