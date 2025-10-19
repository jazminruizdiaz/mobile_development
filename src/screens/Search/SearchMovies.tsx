import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { styles } from './styles';
import { SearchBar } from './SearchBar';
import { MovieGrid } from '../Movie/components/grid/MovieGrid';
import { colors } from '../../constants/colors';
import { useSearchMoviesByName } from '../../hooks/useSearchMoviesByName';
import { usePopularMovies } from '../../hooks/usePopularMovies';

export const SearchMovies = () => {
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
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchText}
          onChange={handleChangeText}
          onSearch={handleSearch}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextCustom variant="body" style={styles.loadingText}>
            Loading movies...
          </TextCustom>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        value={searchText}
        onChange={handleChangeText}
        onSearch={handleSearch}
      />

      {moviesToShow && moviesToShow.length > 0 ? (
        <MovieGrid movies={moviesToShow} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            No results found for "{searchText}"
          </TextCustom>
        </View>
      )}
    </View>
  );
};
