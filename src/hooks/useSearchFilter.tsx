import { useState } from 'react';

interface UseSearchFilterReturn {
  inputText: string;
  selectedGenre: string | null;
  handleChangeText: (text: string) => void;
  handleSelectedGenre: (genreId: string | null) => void;
  handleSearch: () => void;
  isSearchActive: boolean;
}

export const useSearchFilter = (): UseSearchFilterReturn => {
  const [inputText, setInputText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  const handleSelectedGenre = (genreId: string | null) => {
    setSelectedGenre(genreId);
  };

  const handleSearch = () => {};

  const isSearchActive = inputText.trim() !== '' || selectedGenre !== null;

  return {
    inputText,
    selectedGenre,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
    isSearchActive,
  };
};
