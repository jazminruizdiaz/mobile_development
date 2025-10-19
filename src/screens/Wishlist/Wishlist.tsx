import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { colors } from '../../constants/colors';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { MovieGrid } from '../Movie/components/grid/MovieGrid';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <ScreenHeader title='Wishlist' />
        {wishlist.length > 0 ? (
          <MovieGrid movies={wishlist} />

        ) : (
          <View style={styles.emptyContent}>
            <TextCustom variant="body" >
              No movies in your Wishlist yet
            </TextCustom>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
};



export default Wishlist;
