import { StyleSheet } from 'react-native';
import type { ThemeColors } from '../../../constants/colorsFun'; 

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  base: {
    color: colors.textPrimary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});
