import { View } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { Button } from '../../../components/atoms/Button/Button';
import { styles } from './styles';

type Props = {
  onWishlistPress: () => void;
  onDetailsPress: () => void;
};

export const MovieOverlay = ({ onWishlistPress, onDetailsPress }: Props) => {
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
        <Button title="Details" variant="primary" onPress={onDetailsPress} />
      </View>
    </View>
  );
};
