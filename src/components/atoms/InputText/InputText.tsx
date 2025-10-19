import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import { colors } from '../../../constants/colors';

export interface InputTextProps {
  value: string;
  onChange: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
}

export const InputText = ({
  value,
  onChange,
  onSubmitEditing,
  placeholder = 'Search...',
}: InputTextProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};
