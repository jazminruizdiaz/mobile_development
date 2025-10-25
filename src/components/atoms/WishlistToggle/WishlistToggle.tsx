import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Movie } from '../../../types/Movie';
import { useWishlist } from '../../../contexts/Wishlist/WishlistContext';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { styles } from './styles';

type WishlistToggleProps = {
  movie: Movie;
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
};

export const WishlistToggle = ({
  movie,
  containerStyle,
  iconSize = 18,
}: WishlistToggleProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const colors = useThemedColors();
  const selected = isInWishlist(movie.id);

  const handlePress = (event: GestureResponderEvent) => {
    event.stopPropagation();
    toggleWishlist(movie);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.toggleBase,
        pressed && styles.pressed,
        containerStyle,
      ]}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={selected ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <FontAwesome6
        name="bookmark"
        size={iconSize}
        color={selected ? colors.primary : colors.white}
        iconStyle={selected ? 'solid' : 'regular'}
      />
    </Pressable>
  );
};
