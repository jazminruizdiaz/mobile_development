import { FlatList, View, ActivityIndicator } from 'react-native';
import { MovieSectionHeader } from './MovieSectionHeader';
import { MovieItem } from '../items/MovieItem';
import { Movie } from '../../../../types/Movie';
import { SectionContent } from '../../../../types/Section';
import { useEffect, useState } from 'react';
import {
  getMoviesByCompanyId,
  getMoviesByGenreId,
  getBestMovies,
} from '../../../../services/MDBService';
import { BestMovieItem } from '../items/BestMovieItem';
import { colors } from '../../../../constants/colors';
import { styles } from './styles';

export const MovieSection = ({
  title,
  actionLabel,
  onSeeMore,
  type,
  companyId,
  genreId,
}: SectionContent) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ((type === 'Company' && !companyId) || (type === 'Genre' && !genreId)) {
      setMovies([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    let promise: Promise<Movie[]>;

    if (type === 'Company' && companyId) {
      promise = getMoviesByCompanyId(companyId);
    } else if (type === 'Genre' && genreId) {
      promise = getMoviesByGenreId(genreId);
    } else {
      promise = getBestMovies();
    }

    promise
      .then(response => {
        setMovies(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type, companyId, genreId]);

  return (
    <>
      <MovieSectionHeader
        title={title}
        actionLabel={actionLabel}
        onSeeMore={onSeeMore}
      />
      {loading ? (
        <View style={styles.sectionLoading}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            if (type === 'Best movies') {
              return <BestMovieItem movie={item} />;
            }
            return <MovieItem movie={item} />;
          }}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};
