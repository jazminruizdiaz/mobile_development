import { DefaultTheme } from '@react-navigation/native';
import { getThemeColors } from '../constants/colorsFun';
import { ThemeMode } from '../contexts/Theme/ThemeContext';

export const getNavigationTheme = (themeMode: ThemeMode) => {
  const colors = getThemeColors(themeMode);
  const isDark = themeMode === 'dark';

  return {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,      
      card: colors.backgroundLight,      
      text: colors.textPrimary,
      border: isDark ? '#333' : '#ddd',
      notification: colors.primary,
    },
  };
};