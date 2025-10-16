import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';

type Props = {
  movie_id: number;
  onWishlistPress: (movie_id: number) => void;
  onDetailsPress: (movie_id: number) => void;
  isInWishlist: boolean;
};

export const MovieOverlay = ({
  movie_id,
  onWishlistPress,
  onDetailsPress,
  isInWishlist,
}: Props) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.textRow}>
        <TextCustom variant="subtitle">My list</TextCustom>
        <TextCustom variant="subtitle">Discover</TextCustom>
      </View>

      <View style={styles.buttonRow}>
        <Button
          title={isInWishlist ? '✓ In Wishlist' : '+ Wishlist'}
          variant="secondary"
          onPress={() => onWishlistPress(movie_id)}
        />
        <Button
          title="Details"
          variant="primary"
          onPress={() => onDetailsPress(movie_id)}
        />
      </View>
    </View>
  );
};
