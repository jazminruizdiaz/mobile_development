import { FlatList, View } from 'react-native';
import { Movie } from '../../../../../types/Movie';
import { MovieItem } from '../../items/MovieItem';

export interface SectionMovieGridProps {
  movies: Movie[];
}
export const MovieGrid = ({ movies }: SectionMovieGridProps) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={movie => movie.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <MovieItem movie={item}
        />
      )}
      contentContainerStyle={{ padding: 0 }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
};
