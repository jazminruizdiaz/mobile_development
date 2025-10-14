import { styles } from './styles';
import { DAText } from '../DAText/DAText';
import { TouchableOpacity } from 'react-native';

interface DAButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
}

export const DAButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: DAButtonProps) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'text':
        return styles.text;
      default:
        return styles.primary;
    }
  };
  const getTextStlye = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'text':
        return styles.textVariant;

      default:
        return styles.primaryText;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant !== 'text' && styles.button,
        getButtonStyle(),
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <DAText style={getTextStlye()}>{title}</DAText>
    </TouchableOpacity>
  );
};
