import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    width: 16,
  },
  sectionsList: {
    marginTop: 10,
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
  customButton: {
    backgroundColor: 'transparent',
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  customButtonText: {
    fontSize: 15,
  },
});