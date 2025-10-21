import { View } from 'react-native';
import { Button } from '../../../../components/atoms/Button/Button';
import { createStyles } from './styles';
import { Movie } from '../../../../types/Movie';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParams } from '../../../../types/StackNavigator';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

type Props = {
  movie: Movie;
};

export const MovieOverlay = ({ movie }: Props) => {
  const { themeMode } = useTheme();
  const colors = getThemeColors(themeMode);
  const styles = createStyles(colors);
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
