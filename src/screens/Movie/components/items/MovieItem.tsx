import { View, TouchableOpacity, Pressable, StyleProp, ImageStyle } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';

type Props = {
  movie: Movie;
  style?: StyleProp<ImageStyle>;
  showToggle?: boolean;
};

export const MovieItem = ({ movie, style, showToggle }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openMovieDetails } = useMovieModal();
  const { poster_path, title, id } = movie;
  return (
    <TouchableOpacity
      style={styles.movieItemContainer}
      onPress={() => openMovieDetails(id)}
    >
      <MovieCard posterPath={poster_path} style={style ?? styles.movieCard} />
      {showToggle && (
        <Pressable
          style={styles.wishlistIcon}
          onPress={e => {
            e.stopPropagation();
            toggleWishlist(movie);
          }}
        >
          <TextCustom style={styles.wishlistIconText}>
            {isInWishlist(id) ? '✓' : '+'}
          </TextCustom>
        </Pressable>
      )}
      <TextCustom style={styles.movieTitle} numberOfLines={1}>
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
