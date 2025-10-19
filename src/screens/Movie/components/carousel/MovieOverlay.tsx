import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';
import { Movie } from '../../../../types/Movie';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles as textStyles } from '../../../../components/atoms/Text/styles';
import { StackParams } from '../../../../types/StackNavigator';

type Props = {
  movie: Movie;
};

export const MovieOverlay = ({ movie }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openMovieDetails } = useMovieModal();
  const navigation = useNavigation<NavigationProp<StackParams>>();

  const handleDiscover = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={styles.overlay}>
      <View style={styles.textRow}>
        <TextCustom variant="subtitle">My list</TextCustom>
        <Button
          title="Discover"
          onPress={handleDiscover}
          variant="custom"
          style={styles.customButton}
          textStyle={textStyles.subtitle}
        />
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
