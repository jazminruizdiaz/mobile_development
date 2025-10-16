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

export const BestMovieItem = ({
  poster_path,
  title,
  vote_average,
  onPress,
  onWishlistToggle,
  isInWishlist,
}: Props) => {
  return (
    <TouchableOpacity style={styles.bestMovieCardContainer} onPress={onPress}>
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
    </TouchableOpacity>
  );
};
