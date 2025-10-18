import { useEffect, useState } from 'react';
import { Movie } from '../../../../../types/Movie';
import { TextCustom } from '../../../../../components/atoms/Text/TextCustom';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../../../constants/colors';
import { MovieGrid } from '../../grid/MovieGrid';
import { styles } from './styles';
import { fetchMovies, fetchMoviesProps } from './fetchMovies';

export interface SectionDetailsProps extends fetchMoviesProps {
  title: string;
}

export const SectionDetails = ({ route }: any) => {
  const { type, companyId, genreId } = route.params;

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
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <TextCustom variant="body" style={styles.loadingText}>
          Loading movies...
        </TextCustom>
      </View>
    );
  }

  return (
    <View>
      {movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        <View style={styles.emptyState}>
          <TextCustom variant="body">No movies found</TextCustom>
        </View>
      )}
    </View>
  );
};
