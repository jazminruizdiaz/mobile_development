import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/colorsFun';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  primary: {
    backgroundColor: colors.buttonPrimary,
  },
  secondary: {
    backgroundColor: colors.buttonSecondary,
  },
  disabled: {
    opacity: 0.5,
  },
  primaryText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});
