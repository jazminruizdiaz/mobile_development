import { useTMDB } from "./useTMDB";
import { Genre } from "../types/Genre";

export const useGenres = (enabled = true) => {
    return useTMDB<{ genres: Genre[] }>(
        '/genre/movie/list',
        { language: 'en-US' },
        enabled
    );
}