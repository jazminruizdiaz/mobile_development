import { View } from 'react-native';
import { Dropdown, DropdownOptions } from '../../atoms/Dropdown/Dropdown';
import { styles } from './styles';
import { InputText } from '../../atoms/InputText/InputText';
import { Button } from '../../atoms/Button/Button';

interface SearchFilterProps {
  inputText: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  selectedGenre: string | null;
  onSelectedGenre: (genreId: string | null) => void;
  genreOptions: DropdownOptions[];
  searchButtonText?: string;
  placeholder?: string;
}

export const SearchFilter = ({
  inputText,
  onChangeText,
  onSearch,
  selectedGenre,
  onSelectedGenre,
  genreOptions,
  searchButtonText = 'Search',
  placeholder = 'Search movies by name',
}: SearchFilterProps) => {
  const isSearchEnabled = inputText.trim().length > 0 || selectedGenre != null;

  return (
    <View style={styles.container}>
      <Dropdown
        options={genreOptions}
        selectedValue={selectedGenre}
        onSelect={onSelectedGenre}
        placeholder="Select genre"
        searchable={false}
      />
      <InputText
        value={inputText}
        onChange={onChangeText}
        placeholder={placeholder}
        onSubmitEditing={onSearch}
      />
      <Button
        title={searchButtonText}
        onPress={onSearch}
        disabled={!isSearchEnabled}
        variant="primary"
        style={styles.searchButton}
      />
    </View>
  );
};
