import { Text, TextStyle, StyleProp } from 'react-native';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { textStyles } from './styles';

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
  const colors = useThemedColors();

  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'title':
        return textStyles.title;
      case 'subtitle':
        return textStyles.subtitle;
      case 'body':
      default:
        return textStyles.body;
    }
  };

  const dynamicColor = { color: colors.textPrimary };

  return (
    <Text
      style={[dynamicColor, getVariantStyle(), style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};