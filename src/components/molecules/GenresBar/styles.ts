import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  genresBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 24,
  },
  genresBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: '800',
  },
  genreLabelActive: {
    color: '#111',
  },
});
