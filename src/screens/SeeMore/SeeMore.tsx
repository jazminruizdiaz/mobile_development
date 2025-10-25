import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { ActivityIndicator, View } from 'react-native';
import { MovieGrid } from '../../components/organisms/MovieGrid/MovieGrid';
import { styles } from './styles';
import { useMoviesByCompany } from '../../hooks/useMoviesByCompany';
import { useMoviesByGenre } from '../../hooks/useMoviesByGenre';
import { useTopRatedMovies } from '../../hooks/useTopRatedMovies';
import { SectionType } from '../../types/Section';
import { useThemedColors } from '../../hooks/useThemedColors'; 

export const SeeMore = ({ route }: any) => {
  const colors = useThemedColors(); 

  const { type, companyId, genreId } = route.params || {};

  const isCompanyEnabled = type === 'Company' && !!companyId;
  const isGenreEnabled = type === 'Genre' && !!genreId;
  const isBestEnabled = type === 'Best movies';

  const {
    data: companyData,
    loading: companyLoading,
    error: companyError,
  } = useMoviesByCompany(companyId ?? 0, isCompanyEnabled);

  const {
    data: genreData,
    loading: genreLoading,
    error: genreError,
  } = useMoviesByGenre(genreId ?? 0, isGenreEnabled);

  const {
    data: bestData,
    loading: bestLoading,
    error: bestError,
  } = useTopRatedMovies(isBestEnabled);

  const getSectionData = (type: SectionType) => {
    switch (type) {
      case 'Company':
        return {
          movies: companyData?.results ?? [],
          loading: companyLoading,
          error: companyError,
        };
      case 'Genre':
        return {
          movies: genreData?.results ?? [],
          loading: genreLoading,
          error: genreError,
        };
      case 'Best movies':
        return {
          movies: bestData?.results ?? [],
          loading: bestLoading,
          error: bestError,
        };
      default:
        return { movies: [], loading: false, error: null };
    }
  };

  const { movies, loading } = getSectionData(type);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <TextCustom variant="body" style={[styles.loadingText, { color: colors.textPrimary }]}>
          Loading movies...
        </TextCustom>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {movies.length > 0 ? (
        <MovieGrid movies={movies} type={type} />
      ) : (
        <View style={styles.emptyState}>
          <TextCustom variant="body">No movies found</TextCustom>
        </View>
      )}
    </View>
  );
};
