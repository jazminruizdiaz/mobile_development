import { ColorSchemeName } from 'react-native';
import { colors } from '../../constants/colors'
import { createContext, useContext } from 'react';
import { Appearance } from 'react-native';


export type ThemeMode = 'light' | 'dark';


export type ThemeContextType = {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'dark',
  toggleThemeMode: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};