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
    marginBottom: 24,
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
});