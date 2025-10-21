import { Text, TextStyle, StyleProp } from 'react-native';
import { useTheme } from '../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../constants/colorsFun';
import { createStyles } from './styles';


interface TextProps {
  children: string | React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const TextCustom = ({
  children,
  variant = 'body',
  style,
  numberOfLines,
}: TextProps) => {
  const { themeMode } = useTheme();
  const colors = getThemeColors(themeMode);
  const styles = createStyles(colors);

  const getVariantStyle = () => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'subtitle':
        return styles.subtitle;
      case 'body':
      default:
        return styles.body;
    }
  };

  return (
    <Text
      style={[styles.base, getVariantStyle(), style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
