import React, { useState, ReactNode, useCallback, useMemo } from 'react';
import { ThemeContext, ThemeContextType, ThemeMode } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value: ThemeContextType = useMemo(
    () => ({
      themeMode,
      toggleThemeMode,
    }),
    [themeMode, toggleThemeMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
