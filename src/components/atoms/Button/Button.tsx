import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { TextCustom } from '../Text/TextCustom';
import { buttonStyles } from './styles';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'third'  |'custom';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
  children,
}: ButtonProps) => {
  const colors = useThemedColors();

  const buttonStyle: StyleProp<ViewStyle> = variant === 'custom'
    ? style
    : [
        buttonStyles.button,
        variant === 'primary'
        ? { backgroundColor: colors.buttonPrimary }
        : variant === 'secondary'
        ? { backgroundColor: colors.buttonSecondary }
        : { backgroundColor: colors.gray },

        disabled && buttonStyles.disabled,
        style,
      ].filter(Boolean);

  const textStyleArray: StyleProp<TextStyle> = variant === 'custom'
  ? textStyle
  : [
      variant === 'primary'
        ? { ...buttonStyles.primaryText, color: colors.textDark }
        : variant === 'secondary'
        ? { ...buttonStyles.secondaryText, color: colors.textPrimary }
        : { ...buttonStyles.thirdText, color: colors.white },
      textStyle,
    ].filter(Boolean);

  
  return (
   <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {children ? (
        children
      ) : (
        <TextCustom style={textStyleArray}>{title}</TextCustom>
      )}
    </TouchableOpacity>

  );
};

