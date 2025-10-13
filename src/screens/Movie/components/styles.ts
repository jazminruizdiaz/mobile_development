import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  poster: {
    width: width,
    height: height * 0.65,
  },
  movieCard: {
    width: 150,
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  movieItemContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  movieTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    color: colors.textPrimary,
    maxWidth: 150,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
  },
  actionLabel: {
    color: colors.primary,
  },
  sectionsList: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
});
