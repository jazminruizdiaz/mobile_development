import { View, TouchableOpacity, Pressable } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { createStyles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

type Props = {
  movie: Movie;
};

export const BestMovieItem = ({ movie }: Props) => {
  const { themeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openMovieDetails } = useMovieModal();
  const { title, vote_average, poster_path, id } = movie;
  return (
    <TouchableOpacity
      style={styles.bestMovieCardContainer}
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
        <TextCustom style={styles.wishlistIconText}>
          {isInWishlist(id) ? '✓' : '+'}
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
