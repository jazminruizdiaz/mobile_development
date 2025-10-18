import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { colors } from '../../constants/colors';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <TextCustom variant="title">Wishlist</TextCustom>
      <TextCustom variant="body" style={styles.subtitle}>
        Wishlist screen coming soon...
      </TextCustom>
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
  subtitle: {
    marginTop: 8,
  },
});

export default Wishlist;
