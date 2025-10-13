import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  poster: {
    width: width,
    height: height * 0.65,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
  },
  actionLabel: {
    color: colors.primary,
  },
  sectionsList: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  genresBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 24,
  },
  genresBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderRadius: 28,
    backgroundColor: 'rgba(30,30,30,0.6)',
  },
  genre: {
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  genreActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
  },
  genreLabel: {
    color: '#EEE',
    fontWeight: '600',
  },
  genreLabelActive: {
    color: '#111',
  },
});
