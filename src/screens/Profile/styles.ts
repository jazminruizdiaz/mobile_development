import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 12,

  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.primary,
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
    backgroundColor: colors.buttonSecondary,
  },
  statBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.textPrimary,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    paddingHorizontal: 4,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: colors.textDark,
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
    backgroundColor: colors.backgroundLight,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  insightCard: {
    backgroundColor: colors.backgroundLight, // combina con tu paleta actual
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  insightText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 4,
  },
  insightSubText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  highlight: {
    color: colors.primary,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    paddingVertical: 12,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },

  favoriteGenreSection: {
    marginTop: 16,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
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
  movieTitleSmall: {
    color: colors.textPrimary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    width: 90,
  },
  favoriteGenreHeader: {
    marginBottom: 10,
  },
  subSectionSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  highlightText: {
    color: colors.primary,
    fontWeight: '700',
  },

});
