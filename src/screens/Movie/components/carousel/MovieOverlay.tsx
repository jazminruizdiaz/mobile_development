import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';
import { Movie } from '../../../../types/Movie';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';

type Props = {
  movie: Movie;
  onDetailsPress: (movie_id: number) => void;
};

export const MovieOverlay = ({ movie, onDetailsPress }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
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
          onPress={() => onDetailsPress(movie.id)}
        />
      </View>
    </View>
  );
};
