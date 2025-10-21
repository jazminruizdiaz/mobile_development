import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { createStyles } from '../styles';
import { SearchBar } from './SearchBar';
import { MovieGrid } from '../../Movie/components/grid/MovieGrid';
import { useSearchMoviesByName } from '../../../hooks/useSearchMoviesByName';
import { usePopularMovies } from '../../../hooks/usePopularMovies';
import { useTheme } from '../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../constants/colorsFun';

export const SearchMovies = () => {
   const { themeMode, toggleThemeMode } = useTheme();
      const colors = getThemeColors(themeMode);
      const styles = createStyles(colors)
      
  const [inputText, setInputText] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [queryToSearch, setQueryToSearch] = useState('');

  const { data: searchData, loading: searchLoading } = useSearchMoviesByName(
    queryToSearch,
    enabled,
  );
  const { data: popularData, loading: popularLoading } = usePopularMovies();

  const handleSearch = () => {
    if (inputText.trim()) {
      setQueryToSearch(inputText);
      setEnabled(true);
    }
  };

  const handleChangeText = (text: string) => {
    setInputText(text);
    if (!text.trim()) {
      setEnabled(false);
      setQueryToSearch('');
    }
  };

  const moviesToShow = enabled ? searchData?.results : popularData?.results;
  const isLoading = enabled ? searchLoading : popularLoading;

  if (isLoading) {
    return (
      <>
        <SearchBar
          value={inputText}
          onChange={handleChangeText}
          onSearch={handleSearch}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextCustom variant="body" style={styles.loadingText}>
            Loading movies...
          </TextCustom>
        </View>
      </>
    );
  }

  return (
    <>
      <SearchBar
        value={inputText}
        onChange={handleChangeText}
        onSearch={handleSearch}
      />

      {moviesToShow && moviesToShow.length > 0 ? (
        <MovieGrid movies={moviesToShow} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            No results found for "{inputText}"
          </TextCustom>
        </View>
      )}
    </>
  );
};
