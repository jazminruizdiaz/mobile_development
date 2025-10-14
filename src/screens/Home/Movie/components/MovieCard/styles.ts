import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    width: 120,
  },
  title: {
    marginTop: 6,
    fontSize: 12,
    color: colors.textPrimary,
    width: 120,
  },

  carouselPoster: {
    width: width,
    height: height * 0.65,
  },

  listPoster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
});
