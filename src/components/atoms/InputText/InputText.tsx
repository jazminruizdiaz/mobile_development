import { StyleProp, TextStyle, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useThemedColors } from '../../../hooks/useThemedColors';

export interface InputTextProps {
  value: string;
  onChange: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  inpuStyle?: StyleProp<TextStyle>;
}

export const InputText = ({
  value,
  onChange,
  onSubmitEditing,
  placeholder = 'Search...',
  inpuStyle,
}: InputTextProps) => {
  const colors = useThemedColors();
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, inpuStyle, {color: colors.textPrimary}]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};
