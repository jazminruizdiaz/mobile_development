import React, { useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { styles } from './styles';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import { useSearchMoviesByName } from '../../../hooks/useSearchMoviesByName';
import { usePopularMovies } from '../../../hooks/usePopularMovies';
import { SearchFilter } from '../../molecules/SearchFilter/SearchFilter';
import { useMoviesByGenre } from '../../../hooks/useMoviesByGenre';
import { useSearchFilter } from '../../../hooks/useSearchFilter';
import { useGenresOptions } from '../../../hooks/useGenresOptions';
import { DEFAULT_GENRE } from '../../../types/Movie';
import { useFocusEffect } from '@react-navigation/native';
import { useThemedColors } from '../../../hooks/useThemedColors';

export const SearchMovies = () => {
  const {
    inputText,
    selectedGenre,
    activeGenre,
    activeQuery,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
    resetFilters,
  } = useSearchFilter();

  const { genreOptions } = useGenresOptions();

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetFilters();
      };
    }, [resetFilters]),
  );

  const hasQuery = !!activeQuery;
  const hasGenre = activeGenre !== DEFAULT_GENRE && !!activeGenre;

  const { data: searchData, loading: searchLoading } = useSearchMoviesByName(
    activeQuery,
    hasQuery,
  );

  const filteredSearchResults = hasQuery
    ? (searchData?.results ?? []).filter(movie =>
        hasGenre && Array.isArray(movie.genre_ids)
          ? movie.genre_ids.includes(Number(activeGenre))
          : true,
      )
    : [];

  const { data: genreMoviesData, loading: genreLoading } = useMoviesByGenre(
    Number(activeGenre),
    hasGenre && !hasQuery,
  );

  const { data: popularData, loading: popularLoading } = usePopularMovies();

  const getMoviesAndLoading = () => {
    if (hasQuery) {
      return { movies: filteredSearchResults, loading: searchLoading };
    }

    if (hasGenre) {
      return { movies: genreMoviesData?.results, loading: genreLoading };
    }

    return { movies: popularData?.results, loading: popularLoading };
  };
  const colors = useThemedColors();
  const { movies, loading } = getMoviesAndLoading();
  if (loading) {
    return (
      <>
        <SearchFilter
          inputText={inputText}
          onChangeText={handleChangeText}
          onSearch={handleSearch}
          selectedGenre={selectedGenre}
          onSelectedGenre={handleSelectedGenre}
          genreOptions={genreOptions}
        />
        <View
          style={[
            styles.loadingContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <ActivityIndicator size="large" color={colors.primary} />
          <TextCustom
            variant="body"
            style={[styles.loadingText, { color: colors.textPrimary }]}
          >
            Loading movies...
          </TextCustom>
        </View>
      </>
    );
  }

  return (
    <>
      <SearchFilter
        inputText={inputText}
        onChangeText={handleChangeText}
        onSearch={handleSearch}
        selectedGenre={selectedGenre}
        onSelectedGenre={handleSelectedGenre}
        genreOptions={genreOptions}
      />

      {movies && movies.length ? (
        <MovieGrid movies={movies} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">No results found</TextCustom>
        </View>
      )}
    </>
  );
};
