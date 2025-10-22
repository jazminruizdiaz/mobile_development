import { DefaultTheme } from '@react-navigation/native';
import { getThemeColors } from '../constants/colorsFun';
import type { ThemeMode } from '../contexts/Theme/ThemeContext';

export const getNavigationTheme = (themeMode: ThemeMode) => {
  const colors = getThemeColors(themeMode);

  return {
    dark: themeMode === 'dark',
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.backgroundLight,
      text: colors.textPrimary,
      border: colors.backgroundLight,
      notification: colors.primary,
    },
    fonts: DefaultTheme.fonts, 
  };
};