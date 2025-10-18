import {
  getBestMovies,
  getMoviesByCompanyId,
  getMoviesByGenreId,
} from '../../../../../services/MDBService';
import { SectionType } from '../../../../../types/Section';

export interface fetchMoviesProps {
  type: SectionType;
  companyId?: number;
  genreId?: number;
}
export const fetchMovies = async ({
  type,
  companyId,
  genreId,
}: fetchMoviesProps) => {
  try {
    if (type === 'Company' && companyId) {
      return await getMoviesByCompanyId(companyId);
    }
    if (type === 'Genre' && genreId) {
      return await getMoviesByGenreId(genreId);
    }
    if (type === 'Best movies') {
      return await getBestMovies();
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
