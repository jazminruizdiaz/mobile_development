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
 buttonSecondary: 'rgba(0, 0, 0, 0.1)',

  // Gradient colors
  gradientOverlayBottom: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)'],
  gradientOverlayTop: ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.1)'],

  // Other colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

const lightColors = {
  // Primary colors
  primary: '#d8c901',
  primaryDark: '#FFA000',

  // Background colors
  background: '#FFFFFF',
  backgroundLight: '#F5F5F5',

  // Text colors
  textPrimary: '#000000',
  textSecondary: '#666666',
  textDark: '#000000',

  // Button colors
  buttonPrimary: '#d8c901',
  buttonSecondary: 'rgba(0, 0, 0, 0.1)',

  // Gradient colors
  gradientOverlayBottom: [
   'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.63)',
    'rgba(255, 255, 255, 1)',
  ],
  gradientOverlayTop: [
    'rgba(247, 237, 237, 0.17)',
    'rgba(255, 255, 255, 0.34)',
    'rgba(255, 255, 255, 0)',
  ],

  // Other colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const getThemeColors = (themeMode: 'light' | 'dark') => {
  return themeMode === 'dark' ? darkColors : lightColors;
};
