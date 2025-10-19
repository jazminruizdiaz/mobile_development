import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { colors } from '../../constants/colors';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { MovieGrid } from '../Movie/components/grid/MovieGrid';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={styles.container}>
      <TextCustom variant="title">Wishlist</TextCustom>

      {wishlist.length > 0 ? (
        <MovieGrid movies={wishlist} />

      ) : (
        <TextCustom variant="body" style={styles.subtitle}>
          No movies in your Wishlist yet
        </TextCustom>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    textAlign: 'center',
    marginVertical: 16,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Wishlist;
