import { colors } from '../../constants/colors';
import { View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchContainer: {
    flex: 1,
  },
  searchBarContainer: {
    width: '100%',
    gap: 12,
    paddingHorizontal: 16,
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
  },
});
