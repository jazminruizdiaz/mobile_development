import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/colors';

export const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.background,
  },

  gridContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  gridContent: {
    padding: 16,
    paddingBottom: 100,
  },
  gridWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
