import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginBottom: 24,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  searchButton: {
    width: 50,
    height: 45,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 8,
    backgroundColor: colors.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
