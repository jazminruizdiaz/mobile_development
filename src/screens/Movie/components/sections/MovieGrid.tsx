import { FlatList, View } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { MovieItem } from '../items/MovieItem';
import { styles } from './SectionDetails/styles';

export interface MovieGridProps {
  movies: Movie[];
}
export const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={movie => movie.id.toString()}
      numColumns={2}
      renderItem={({ item }) => <MovieItem movie={item} />}
      contentContainerStyle={styles.gridContent}
      columnWrapperStyle={styles.gridWrapper}
    />
  );
};
