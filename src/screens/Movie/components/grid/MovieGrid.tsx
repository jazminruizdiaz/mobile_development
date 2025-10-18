import { FlatList, View } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { MovieItem } from '../items/MovieItem';
import { styles } from './styles';
import { SectionType } from '../../../../types/Section';
import { BestMovieItem } from '../items/BestMovieItem';

export interface MovieGridProps {
  movies: Movie[];
  type?: SectionType;
}
export const MovieGrid = ({ movies, type }: MovieGridProps) => {
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
      contentContainerStyle={styles.gridContent}
      columnWrapperStyle={styles.gridWrapper}
    />
  );
};
