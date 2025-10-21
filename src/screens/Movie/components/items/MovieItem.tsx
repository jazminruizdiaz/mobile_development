import { TouchableOpacity, Pressable } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { useThemedColors } from '../../../../hooks/useThemedColors';

type Props = {
  movie: Movie;
};

export const MovieItem = ({ movie }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openMovieDetails } = useMovieModal();
  const { poster_path, title, id } = movie;
  const colors = useThemedColors();
  
  return (
    <TouchableOpacity
      style={styles.movieItemContainer}
      onPress={() => openMovieDetails(id)}
    >
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
      <Pressable
        style={styles.wishlistIcon}
        onPress={e => {
          e.stopPropagation();
          toggleWishlist(movie);
        }}
      >
        <TextCustom style={[styles.wishlistIconText, { color: colors.white }]}>
          {isInWishlist(id) ? '✓' : '+'}
        </TextCustom>
      </Pressable>
      <TextCustom style={[styles.movieTitle, { color: colors.textPrimary }]} numberOfLines={1}>
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
