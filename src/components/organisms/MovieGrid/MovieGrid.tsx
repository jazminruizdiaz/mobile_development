import { FlatList } from 'react-native';
import { Movie } from '../../../types/Movie';
import { MovieItem } from '../../molecules/MovieItems/MovieItem';
import { styles } from './styles';
import { SectionType } from '../../../types/Section';
import { BestMovieItem } from '../../molecules/MovieItems/BestMovieItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface MovieGridProps {
  movies: Movie[];
  type?: SectionType;
}
export const MovieGrid = ({ movies, type }: MovieGridProps) => {
  const insets = useSafeAreaInsets();
  const bottom = insets.bottom;

  return (
    <FlatList
      data={movies}
      keyExtractor={movie => movie.id.toString()}
      numColumns={2}
      renderItem={({ item }) =>
        type === 'Best movies' ? (
          <BestMovieItem movie={item} />
        ) : (
          <MovieItem movie={item} />
        )
      }
      contentContainerStyle={[styles.gridContent, { paddingBottom: bottom }]}
      columnWrapperStyle={styles.gridWrapper}
    />
  );
};
