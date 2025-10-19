import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { styles } from './styles';

type ScreenHeaderProps = {
  title: string;
};

export const ScreenHeader = ({ title }: ScreenHeaderProps) => (
  <View style={styles.container}>
    <TextCustom variant="title" style={styles.title}>
      {title}
    </TextCustom>
  </View>
);
