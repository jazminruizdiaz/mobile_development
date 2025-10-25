import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  posterWrapper: {
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: width,
    height: height * 0.65,
  },
  posterImage: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  movieCard: {
    width: 150,
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  movieItemContainer: {
    alignItems: 'center',
  },
  movieTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    maxWidth: 150,
  },
  bestMovieCardContainer: {
    position: 'relative',
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestMovieTitle: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
    maxWidth: 150,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  wishlistIcon: {
    position: 'absolute',
    top: 10,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
});
