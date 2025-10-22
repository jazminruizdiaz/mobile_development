import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalContent: {
    width: '95%',
    maxHeight: '90%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  errorContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
  titleContainer: {
    padding: 20,
    borderBottomWidth: 1,
  },
  movieTitleModal: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  movieInfoContainer: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  genresContainer: {
    marginBottom: 20,
  },
  genresLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
  },
  genresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  genreChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  genreText: {
    fontSize: 12,
    fontWeight: '600',
  },
  overviewCast: { marginVertical: 20 },
  overviewLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
  },
  overviewText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
