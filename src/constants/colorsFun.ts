export interface ThemeColors {
  primary: string;
  primaryDark: string;
  background: string;
  backgroundLight: string;
  textPrimary: string;
  textSecondary: string;
  textDark: string;
  gradientOverlayTop: string[];
  buttonPrimary: string;
  buttonSecondary: string;
  gradientOverlayBottom: string[];
  white: string;
  black: string;
  gray: string;
  transparent: string;
}

const darkColors = {
  // Primary colors
  primary: '#FFC107',
  primaryDark: '#FFA000',

  // Background colors
  background: '#000000',
  backgroundLight: '#1A1A1A',

  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textDark: '#000000',

  // Button colors
  buttonPrimary: '#FFC107',
  buttonSecondary: 'rgba(99, 99, 99, 1)',

  // Gradient colors
  gradientOverlayBottom: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)'],
  gradientOverlayTop: [
    'rgba(0, 0, 0, 0.9)',
    'rgba(0, 0, 0, 0.46)',  
    'rgba(0, 0, 0, 0.32)', 
    'rgba(0,0,0,0.1)'],

  // Other colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#686868ff',
  transparent: 'transparent',
};

const lightColors = {
  // Primary colors
  primary: '#FFC107',
  primaryDark: '#FFA000',

  // Background colors
  background: '#FFFFFF',
  backgroundLight: '#F5F5F5',

  // Text colors
  textPrimary: '#000000',
  textSecondary: '#928787ff',
  textDark: '#000000',

  // Button colors
  buttonPrimary: '#FFC107',
  buttonSecondary: 'rgba(230, 229, 229, 0.94)',

  // Gradient colors
  gradientOverlayBottom: [
   'rgba(255, 255, 255, 0.02)',
    'rgba(253, 253, 253, 0.75)',
    'rgba(253, 253, 253, 1)',
    'rgba(255, 255, 255, 1)',
  ],
  gradientOverlayTop: [
    'rgba(255, 255, 255, 0.23)',
    'rgba(255, 255, 255, 0.14)',
    'rgba(249, 249, 249, 0)',
  ],

  // Other colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#686868ff',
  transparent: 'transparent',
};

export const getThemeColors = (themeMode: 'light' | 'dark') => {
  return themeMode === 'dark' ? darkColors : lightColors;
};
