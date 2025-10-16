import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  poster: {
    width: width,
    height: height * 0.65,
  },
  carouselContainer: {
    position: 'relative',
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  overlay: {
    paddingHorizontal: 24,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
  paginationContainer: {
    gap: 10,
    flexDirection: 'row',
    paddingTop: 24,
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
  bestMovieCardContainer: {
    position: 'relative',
    marginRight: 16,
    alignItems: 'center',
  },
  movieInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestMovieTitle: {
    fontSize: 12,
    color: colors.textPrimary,
    fontWeight: '600',
    flex: 1,
    maxWidth: 150,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
});
