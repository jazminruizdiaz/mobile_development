import { TouchableOpacity, StyleProp, ImageStyle } from 'react-native';
import { Movie } from '../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { MovieCard } from './MovieCard';
import { useMovieModal } from '../../../contexts/MovieModal/MovieModalContext';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { WishlistToggle } from '../../atoms/WishlistToggle/WishlistToggle';

type Props = {
  movie: Movie;
  style?: StyleProp<ImageStyle>;
  showToggle?: boolean;
};

export const MovieItem = ({ movie, style, showToggle = true }: Props) => {
  const { openMovieDetails } = useMovieModal();
  const { poster_path, title, id } = movie;
  const colors = useThemedColors();
  return (
    <TouchableOpacity
      style={styles.movieItemContainer}
      onPress={() => openMovieDetails(id)}
    >
      <MovieCard posterPath={poster_path} style={style ?? styles.movieCard} />
      {showToggle && (
        <WishlistToggle movie={movie} containerStyle={styles.wishlistIcon} />
      )}
      <TextCustom
        style={[styles.movieTitle, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
