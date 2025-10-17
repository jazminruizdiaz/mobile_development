import { useEffect, useState } from 'react';
import {
  getMoviesByCompanyId,
  getMoviesByGenreId,
  getPopularMovies,
} from '../../../../../services/MDBService';
import { SectionType } from '../../../../../types/Section';
import { Movie } from '../../../../../types/Movie';
import { TextCustom } from '../../../../../components/atoms/Text/TextCustom';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../../../constants/colors';
import { MovieGrid } from './SectionMovieGrid';

export interface fetchMoviesProps {
  type: SectionType;
  companyId?: number;
  genreId?: number;
}

export interface SectionDetailsProps extends fetchMoviesProps {
  title: string;
  page?: number;
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
      return await getPopularMovies();
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const SectionDetails = ({ route }: any) => {
  const { type, title, companyId, genreId } = route.params;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetchMovies({ type, companyId, genreId });
      setMovies(response);
      setLoading(false);
    };

    loadMovies();
  }, [type, companyId, genreId]);

  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
        <TextCustom variant="body">Loading movies...</TextCustom>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextCustom variant="title" children={title} />
      {movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        <TextCustom variant="body" children="No movies found" />
      )}
    </View>
  );
};
