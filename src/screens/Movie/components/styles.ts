import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  poster: {
    width: width,
    height: height * 0.65,
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
