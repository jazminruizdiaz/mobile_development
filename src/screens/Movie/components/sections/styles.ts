import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  sectionsList: {
    marginTop: 24,
    paddingHorizontal: 24,
    gap: 15,
    marginBottom: 15,
  },
  sectionContainer: {
    gap: 6,
  },
  sectionLoading: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    color: colors.textPrimary,
  },
  actionLabel: {
    color: colors.primary,
  },
  customButton: {
    backgroundColor: 'transparent',
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  customButtonText: {
    color: colors.primary,
    fontSize: 15,
  },
});
