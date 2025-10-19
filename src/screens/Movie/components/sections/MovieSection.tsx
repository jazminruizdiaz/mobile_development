import { FlatList, View, ActivityIndicator } from 'react-native';
import { MovieSectionHeader } from './MovieSectionHeader';
import { MovieItem } from '../items/MovieItem';
import { Movie } from '../../../../types/Movie';
import { SectionContent } from '../../../../types/Section';
import { BestMovieItem } from '../items/BestMovieItem';
import { colors } from '../../../../constants/colors';
import { styles } from './styles';
import { useMoviesByCompany } from '../../../../hooks/useMoviesByCompany';
import { useMoviesByGenre } from '../../../../hooks/useMoviesByGenre';
import { useTopRatedMovies } from '../../../../hooks/useTopRatedMovies';

export const MovieSection = ({
  title,
  actionLabel,
  onSeeMore,
  type,
  companyId,
  genreId,
}: SectionContent) => {
  const isCompanyEnabled = type === 'Company' && !!companyId;
  const isGenreEnabled = type === 'Genre' && !!genreId;
  const isBestEnabled = type === 'Best movies';

  const { data: companyData, loading: companyLoading } = useMoviesByCompany(
    companyId ?? 0,
    isCompanyEnabled,
  );

  const { data: genreData, loading: genreLoading } = useMoviesByGenre(
    genreId ?? 0,
    isGenreEnabled,
  );

  const { data: bestData, loading: bestLoading } =
    useTopRatedMovies(isBestEnabled);

  let movies: Movie[] = [];
  let loading = false;

  if (type === 'Company') {
    movies = companyData?.results ?? [];
    loading = companyLoading;
  } else if (type === 'Genre') {
    movies = genreData?.results ?? [];
    loading = genreLoading;
  } else if (type === 'Best movies') {
    movies = bestData?.results ?? [];
    loading = bestLoading;
  }
  return (
    <View style={styles.sectionContainer}>
      <MovieSectionHeader
        title={title}
        actionLabel={actionLabel}
        onSeeMore={() =>
          onSeeMore({ type, title, companyId, genreId, actionLabel })
        }
      />
      {loading ? (
        <View style={styles.sectionLoading}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={movies.slice(0, 5)}
          renderItem={({ item }) => {
            if (type === 'Best movies') {
              return <BestMovieItem movie={item} />;
            }
            return <MovieItem movie={item} />;
          }}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};
