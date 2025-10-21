import React from 'react';
import { View } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { styles } from './styles';
import { useThemedColors } from '../../../hooks/useThemedColors'; 

type ScreenHeaderProps = {
  title: string;
};

export const ScreenHeader = ({ title }: ScreenHeaderProps) => {
  const colors = useThemedColors(); 

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextCustom variant="title" style={{ color: colors.textPrimary }}>
        {title}
      </TextCustom>
    </View>
  );
};