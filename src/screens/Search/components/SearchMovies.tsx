import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { styles } from '../styles';
import { SearchBar } from './SearchBar';
import { MovieGrid } from '../../Movie/components/grid/MovieGrid';
import { useSearchMoviesByName } from '../../../hooks/useSearchMoviesByName';
import { usePopularMovies } from '../../../hooks/usePopularMovies';
import { useThemedColors } from '../../../hooks/useThemedColors';

export const SearchMovies = () => {
  const colors = useThemedColors();

  const [searchText, setSearchText] = useState('');
  const [enabled, setEnabled] = useState(false);

  const { data: searchData, loading: searchLoading } = useSearchMoviesByName(
    searchText,
    enabled,
  );
  const { data: popularData, loading: popularLoading } = usePopularMovies();

  const handleSearch = () => {
    if (searchText.trim()) {
      setEnabled(true);
    }
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (!text.trim()) {
      setEnabled(false);
    }
  };

  const moviesToShow = enabled ? searchData?.results : popularData?.results;
  const isLoading = enabled ? searchLoading : popularLoading;

  if (isLoading) {
    return (
      <>
        <SearchBar
          value={searchText}
          onChange={handleChangeText}
          onSearch={handleSearch}
        />
        <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextCustom variant="body" style={[styles.loadingText, { color: colors.textPrimary }]}>
            Loading movies...
          </TextCustom>
        </View>
      </>
    );
  }

  return (
    <>
      <SearchBar
        value={searchText}
        onChange={handleChangeText}
        onSearch={handleSearch}
      />

      {moviesToShow && moviesToShow.length ? (
        <MovieGrid movies={moviesToShow} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            No results found for "{searchText}"
          </TextCustom>
        </View>
      )}
    </>
  );
};