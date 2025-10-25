import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  actorCard: {
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  actorImage: {
    width: '100%',
    height: '100%',
  },
  actorImageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 6,
    overflow: 'hidden',
    position: 'relative',
  },
  actorName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  actorCharacter: {
    fontSize: 11,
    color: '#fff',
    textAlign: 'center',
  },
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
