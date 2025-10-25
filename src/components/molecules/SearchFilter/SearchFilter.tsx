import { View } from 'react-native';
import { Dropdown, DropdownOptions } from '../../atoms/Dropdown/Dropdown';
import { styles } from './styles';
import { InputText } from '../../atoms/InputText/InputText';
import { Button } from '../../atoms/Button/Button';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { useThemedColors } from '../../../hooks/useThemedColors';

interface SearchFilterProps {
  inputText: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  selectedGenre: string | null;
  onSelectedGenre: (genreId: string | null) => void;
  genreOptions: DropdownOptions[];
  placeholder?: string;
}

export const SearchFilter = ({
  inputText,
  onChangeText,
  onSearch,
  selectedGenre,
  onSelectedGenre,
  genreOptions,
  placeholder = 'Search movies by name',
}: SearchFilterProps) => {
  const isSearchEnabled = !!inputText.trim() || !!selectedGenre;
  
  const colors = useThemedColors();
  
  return (
    <View style={styles.container}>
      <Dropdown
        options={genreOptions}
        selectedValue={selectedGenre}
        onSelect={onSelectedGenre}
        placeholder="Select genre"
        searchable={false}
      />
      <View style={styles.searchRow}>
        <View style={[styles.inputWrapper, {borderColor:colors.textSecondary}]}>
          <InputText
            value={inputText}
            onChange={onChangeText}
            placeholder={placeholder}
            onSubmitEditing={onSearch}
            inpuStyle={styles.input}
          />
        </View>

        <Button
          title=""
          onPress={onSearch}
          disabled={!isSearchEnabled}
          variant="custom"
          style={[styles.searchButton, {backgroundColor: colors.buttonPrimary}]}
        > 
          <FontAwesome6
            name="magnifying-glass"
            size={18}
            color={isSearchEnabled ? colors.black : colors.buttonSecondary}
            iconStyle="solid"
          />
        </Button>
      </View>
    </View>
  );
};
