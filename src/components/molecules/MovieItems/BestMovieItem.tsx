import { View, TouchableOpacity } from 'react-native';
import { Movie } from '../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { MovieCard } from './MovieCard';
import { useMovieModal } from '../../../contexts/MovieModal/MovieModalContext';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { WishlistToggle } from '../../atoms/WishlistToggle/WishlistToggle';

type Props = {
  movie: Movie;
};

export const BestMovieItem = ({ movie }: Props) => {
  const { openMovieDetails } = useMovieModal();
  const { title, vote_average, poster_path } = movie;
  const colors = useThemedColors();
  return (
    <TouchableOpacity
      style={styles.bestMovieCardContainer}
      onPress={() => openMovieDetails(movie.id)}
    >
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
      <WishlistToggle movie={movie} containerStyle={styles.wishlistIcon} />
      <View style={styles.movieInfoOverlay}>
         <TextCustom style={[styles.bestMovieTitle, { color: colors.white }]} numberOfLines={1}>
          {title}
        </TextCustom>
        <View style={styles.ratingContainer}>
          <TextCustom style={[styles.ratingText, { color: colors.primary }]}>
            ⭐ {vote_average.toFixed(1)}
          </TextCustom>
        </View>
      </View>
    </TouchableOpacity>
  );
};
