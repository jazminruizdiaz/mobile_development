import { useTheme } from '../contexts/Theme/ThemeContext';
import { getThemeColors } from '../constants/colorsFun';
import { useMemo } from 'react';

export const useThemedColors = () => {
  const { themeMode } = useTheme();

  return useMemo(() => {
    return getThemeColors(themeMode);
  }, [themeMode]);
};