import { FlatList, View, ActivityIndicator } from 'react-native';
import { useMemo } from 'react';
import { MovieSectionHeader } from './MovieSectionHeader';
import { MovieItem } from '../../molecules/MovieItems/MovieItem';
import { Movie } from '../../../types/Movie';
import { SectionContent } from '../../../types/Section';
import { BestMovieItem } from '../../molecules/MovieItems/BestMovieItem';
import { styles } from './styles';
import { useMoviesByCompany } from '../../../hooks/useMoviesByCompany';
import { useMoviesByGenre } from '../../../hooks/useMoviesByGenre';
import { useTopRatedMovies } from '../../../hooks/useTopRatedMovies';
import { useThemedColors } from '../../../hooks/useThemedColors'; 

export const MovieSection = ({
  title,
  actionLabel,
  onSeeMore,
  type,
  companyId,
  genreId,
}: SectionContent) => {
  const colors = useThemedColors(); 
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

  const { data: bestData, loading: bestLoading } = useTopRatedMovies(isBestEnabled);

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

  const limitedMovies = useMemo(() => movies.slice(0, 5), [movies]);

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
          data={limitedMovies}
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
