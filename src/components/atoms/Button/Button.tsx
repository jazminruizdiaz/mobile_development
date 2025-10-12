import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TextCustom } from '../Text/TextCustom';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <TextCustom
        style={
          variant === 'primary' ? styles.primaryText : styles.secondaryText
        }
      >
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
