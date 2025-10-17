import { useTMDB } from "./useTMDB";

export const usePopularMovies = () => {
    const endpoint = "/movie/popular";
    const params = {language: 'en-US',
        page: 1,}
};