import { useTMDB } from "./useTMDB";

export const useMoviesByCompany = (companyId: number) => {
    const endpoint = "/discover/movie";
    const params = {with_companies: companyId,
        language: 'en-US',
        page: 1,}
};