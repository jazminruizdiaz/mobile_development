import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 1000,
  },
  dropdown: {
    borderWidth: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color: colors.textPrimary,
  },
});
