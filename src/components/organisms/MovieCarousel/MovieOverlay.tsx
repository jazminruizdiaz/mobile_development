import { View } from 'react-native';
import { Button } from '../../atoms/Button/Button';
import { styles } from './styles';
import { Movie } from '../../../types/Movie';
import { useWishlist } from '../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../contexts/MovieModal/MovieModalContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParams } from '../../../types/StackNavigator';

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
  const handleWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.textRow}>
        <Button
          title="My List"
          onPress={handleWishlist}
          variant="custom"
          style={styles.customButton}
        />
        <Button
          title="Discover"
          onPress={handleDiscover}
          variant="custom"
          style={styles.customButton}
        />
      </View>

      <View style={styles.buttonRow}>
        <Button
          title={isInWishlist(movie.id) ? '✓ In Wishlist' : '+ Wishlist'}
          variant="third"
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
