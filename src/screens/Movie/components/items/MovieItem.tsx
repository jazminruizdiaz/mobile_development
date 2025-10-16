import { View, TouchableOpacity, Pressable } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';

type Props = {
  movie: Movie;
  onPress: () => void;
};

export const MovieItem = ({ movie, onPress }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { poster_path, title, id } = movie;
  return (
    <TouchableOpacity style={styles.movieItemContainer} onPress={onPress}>
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
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
      <TextCustom style={styles.movieTitle}>{title}</TextCustom>
    </TouchableOpacity>
  );
};
