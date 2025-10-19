import { View } from 'react-native';
import { styles } from '../styles';
import { Button } from '../../../components/atoms/Button/Button';
import { InputText } from '../../../components/atoms/InputText/InputText';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
  placeholder?: string;
  searchButtonText?: string;
}

export const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Search movies by name',
  searchButtonText = 'Search',
}: SearchBarProps) => {
  return (
    <View style={styles.searchBarContainer}>
      <InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onSubmitEditing={onSearch}
      />
      <Button
        title={searchButtonText}
        onPress={onSearch}
        disabled={!value.trim()}
        variant="primary"
        style={styles.searchButton}
      />
    </View>
  );
};
