import { useEffect, useState } from 'react';
import { DEFAULT_GENRE } from '../types/Genre';
interface UseSearchFilterReturn {
  inputText: string;
  selectedGenre: string | null;
  activeQuery: string;
  activeGenre: string | null;
  handleChangeText: (text: string) => void;
  handleSelectedGenre: (genreId: string | null) => void;
  handleSearch: () => void;
  isSearchActive: boolean;
}

export const useSearchFilter = (): UseSearchFilterReturn => {
  const [inputText, setInputText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    DEFAULT_GENRE,
  );
  const [activeQuery, setActiveQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState<string | null>(DEFAULT_GENRE);

  useEffect(() => {
    if (!inputText.trim()) {
      setActiveQuery('');
      setActiveGenre(selectedGenre ?? DEFAULT_GENRE);
    }
  }, [inputText, selectedGenre]);

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  const handleSelectedGenre = (genreId: string | null) => {
    setSelectedGenre(genreId ?? DEFAULT_GENRE);
  };

  const handleSearch = () => {
    if (inputText.trim()) {
      setActiveQuery(inputText.trim());
      setActiveGenre(selectedGenre ?? DEFAULT_GENRE);
    }
  };

  const isSearchActive = Boolean(activeQuery || activeGenre !== DEFAULT_GENRE);

  return {
    inputText,
    selectedGenre,
    activeGenre,
    activeQuery,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
    isSearchActive,
  };
};
