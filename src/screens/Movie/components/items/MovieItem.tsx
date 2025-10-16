import { View, TouchableOpacity, Pressable } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';

type Props = Movie & {
  onPress: () => void;
  onWishlistToggle: () => void;
  isInWishlist: boolean;
};

export const MovieItem = ({
  poster_path,
  title,
  onPress,
  onWishlistToggle,
  isInWishlist,
}: Props) => {
  return (
    <TouchableOpacity style={styles.movieItemContainer} onPress={onPress}>
      <MovieCard posterPath={poster_path} style={styles.movieCard} />
      <Pressable
        style={styles.wishlistIcon}
        onPress={e => {
          e.stopPropagation();
          onWishlistToggle();
        }}
      >
        <TextCustom style={styles.wishlistIconText}>
          {isInWishlist ? '✓' : '+'}
        </TextCustom>
      </Pressable>
      <TextCustom style={styles.movieTitle}>{title}</TextCustom>
    </TouchableOpacity>
  );
};
