import React from 'react';
import { View } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { MovieGrid } from '../Movie/components/grid/MovieGrid';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemedColors } from '../../hooks/useThemedColors'; 

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const colors = useThemedColors(); 

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader title="Wishlist" />

      {wishlist.length > 0 ? (
        <MovieGrid movies={wishlist} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            No movies in your Wishlist yet
          </TextCustom>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;