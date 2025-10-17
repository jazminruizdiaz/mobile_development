import { useTMDB } from "./useTMDB";

export const usePopularMovies = () => {
    const endpoint = "/movie/top_rated";
    const params = {language: 'en-US',
        page: 1,}
};