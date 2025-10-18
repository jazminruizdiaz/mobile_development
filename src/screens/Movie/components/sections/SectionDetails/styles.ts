import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/colors';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.textPrimary,
    fontSize: 16,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
