import { Text, TextStyle } from 'react-native';
import { styles } from './styles';

interface TextProps {
  children: string | React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
  style?: TextStyle;
  numberOfLines?: number;
}

export const TextCustom = ({
  children,
  variant = 'body',
  style,
  numberOfLines,
}: TextProps) => {
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
