import React, { useState, ReactNode } from 'react';
import { ThemeContext, ThemeContextType, ThemeMode } from './ThemeContext';
import { Appearance } from 'react-native';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const value: ThemeContextType = {
    themeMode,
    toggleThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};