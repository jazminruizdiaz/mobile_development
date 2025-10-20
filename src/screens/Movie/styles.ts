import { StyleSheet } from 'react-native';
import type { ThemeColors } from '../../constants/colorsFun'; 

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
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
    loadingText: {
      color: colors.textPrimary,
      marginTop: 16,
      fontSize: 16,
    },
    gradientTop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 120,
      zIndex: 2,
    },
  });