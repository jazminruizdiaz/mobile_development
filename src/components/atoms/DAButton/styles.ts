import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
export const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.buttonPrimary,
    flex: 1,
  },
  secondary: {
    backgroundColor: colors.buttonSecondary,
    flex: 1,
  },
  text: {
    backgroundColor: 'transparent',
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
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

  textVariant: {
    color: colors.primary,
    fontSize: 13,
  },
});
