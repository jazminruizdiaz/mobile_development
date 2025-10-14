import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  carouselWrapper: {
    height: height * 0.65,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  overlay: {
    paddingHorizontal: 24,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },

  paginationContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  paginationDot: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  paginationActiveDot: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  listsContainer: {
    paddingBottom: 20,
  },
});
