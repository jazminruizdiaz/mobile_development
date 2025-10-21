import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { createStyles } from './styles';
import { TextCustom } from '../Text/TextCustom';
import { useTheme } from '../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../constants/colorsFun';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'custom';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) => {
   const { themeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);
  const getButtonStyle = () => {
    if (variant === 'custom') {
      return [style];
    }
    return [
      styles.button,
      variant === 'primary' ? styles.primary : styles.secondary,
      disabled && styles.disabled,
      style,
    ];
  };

  const getTextStyle = () => {
    if (variant === 'custom') {
      return [textStyle];
    }
    return [
      variant === 'primary' ? styles.primaryText : styles.secondaryText,
      textStyle,
    ];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <TextCustom style={getTextStyle()}>{title}</TextCustom>
    </TouchableOpacity>
  );
};
