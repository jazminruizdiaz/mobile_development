import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';
import { Movie } from '../../../../types/Movie';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';

type Props = {
  movie: Movie;
};

export const MovieOverlay = ({ movie }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openMovieDetails } = useMovieModal();
  return (
    <View style={styles.overlay}>
      <View style={styles.textRow}>
        <TextCustom variant="subtitle">My list</TextCustom>
        <TextCustom variant="subtitle">Discover</TextCustom>
      </View>

      <View style={styles.buttonRow}>
        <Button
          title={isInWishlist(movie.id) ? '✓ In Wishlist' : '+ Wishlist'}
          variant="secondary"
          onPress={() => toggleWishlist(movie)}
        />
        <Button
          title="Details"
          variant="primary"
          onPress={() => openMovieDetails(movie.id)}
        />
      </View>
    </View>
  );
};
