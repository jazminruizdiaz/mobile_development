import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { colors } from '../../constants/colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextCustom variant="title">Search</TextCustom>
      <TextCustom variant="body" style={styles.subtitle}>
        Search screen coming soon...
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

export default Search;
