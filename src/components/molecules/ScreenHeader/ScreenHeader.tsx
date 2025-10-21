import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { createStyles } from './styles';
import { useTheme } from '../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../constants/colorsFun';

type ScreenHeaderProps = {
  title: string;
};

export const ScreenHeader = ({ title }: ScreenHeaderProps) => {
  const { themeMode, toggleThemeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);

  return (
  <View style={styles.container}>
    <TextCustom variant="title" style={styles.title}>
      {title}
    </TextCustom>
  </View>);
};
