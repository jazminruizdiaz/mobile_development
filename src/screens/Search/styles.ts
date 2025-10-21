import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../constants/colorsFun';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 40,
  },
  searchBarContainer: {
    width: '100%',
    gap: 12,
  },
  gridContainer: {
    flex: 1,
  },

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

  searchButton: {
    flex: 0,
  },

  emptyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
