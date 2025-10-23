import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  statBadge: {
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonLogout: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 13,
    marginTop: 4,
  },

  favoriteGenreSection: {
    marginTop: 16,
  },
  movieCardSmall: {
    width: 90,
    marginRight: 12,
    alignItems: 'center',
  },
  moviePosterSmall: {
    width: 90,
    height: 130,
    borderRadius: 8,
  },
  favoriteGenreHeader: {
    marginBottom: 10,
  },
  subSectionSubtitle: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
  },
  containerFav: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
