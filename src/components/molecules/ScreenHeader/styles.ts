import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { ThemeColors } from '../../../constants/colorsFun';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingBottom: 16,
  },
  title: {
    color: colors.textPrimary,
  },
});
