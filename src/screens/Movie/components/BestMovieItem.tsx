import { View } from 'react-native';
import { Movie } from '../../../types/Movie';
import { styles } from './styles';
import { MovieCard } from './MovieCard';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';

export const BestMovieItem = ({ poster_path, title, vote_average }: Movie) => {
  return (
    <View style={styles.bestMovieCardContainer}>
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
      <View style={styles.movieInfoOverlay}>
        <TextCustom style={styles.bestMovieTitle} numberOfLines={1}>
          {title}
        </TextCustom>
        <View style={styles.ratingContainer}>
          <TextCustom style={styles.ratingText}>
            ⭐ {vote_average.toFixed(1)}
          </TextCustom>
        </View>
      </View>
    </View>
  );
};
