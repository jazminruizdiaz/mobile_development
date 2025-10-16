import { View } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';

export const MovieItem = ({ poster_path, title }: Movie) => {
  return (
    <View style={styles.movieItemContainer}>
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
      <TextCustom style={styles.movieTitle}>{title}</TextCustom>
    </View>
  );
};
