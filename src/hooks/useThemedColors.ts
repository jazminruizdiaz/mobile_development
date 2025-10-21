import { useTheme } from '../contexts/Theme/ThemeContext';
import { getThemeColors } from '../constants/colorsFun';

export const useThemedColors = () => {
  const { themeMode } = useTheme();
  return getThemeColors(themeMode);
};