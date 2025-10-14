import { View } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { Button } from '../../../components/atoms/Button/Button';
import { styles } from './styles';

type Props = {
  movie_id: number;
  onWishlistPress: () => void;
  onDetailsPress: (movie_id: number) => void;
};

export const MovieOverlay = ({
  movie_id,
  onWishlistPress,
  onDetailsPress,
}: Props) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.textRow}>
        <TextCustom variant="subtitle">My list</TextCustom>
        <TextCustom variant="subtitle">Discover</TextCustom>
      </View>

      <View style={styles.buttonRow}>
        <Button
          title="+ Wishlist"
          variant="secondary"
          onPress={onWishlistPress}
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
