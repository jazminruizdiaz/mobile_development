import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { styles } from '../styles';
import { MovieGrid } from '../../Movie/components/grid/MovieGrid';
import { colors } from '../../../constants/colors';
import { useSearchMoviesByName } from '../../../hooks/useSearchMoviesByName';
import { usePopularMovies } from '../../../hooks/usePopularMovies';
import { SearchFilter } from '../../../components/molecules/SearchFilter/SearchFilter';
import { useMoviesByGenre } from '../../../hooks/useMoviesByGenre';
import { useSearchFilter } from '../../../hooks/useSearchFilter';
import { useGenreOptions } from '../../../hooks/useGenreOptions';

export const SearchMovies = () => {
  const {
    inputText,
    selectedGenre,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
  } = useSearchFilter();

  const { genreOptions } = useGenreOptions();

  const query = inputText.trim();
  const hasQuery = query !== '';
  const hasGenre = query !== null;

  const { data: searchData, loading: searchLoading } = useSearchMoviesByName(
    query,
    hasQuery,
  );

  const { data: genreMoviesData, loading: genreLoading } = useMoviesByGenre(
    Number(selectedGenre),
    hasGenre && !hasQuery,
  );

  const { data: popularData, loading: popularLoading } = usePopularMovies();

  const getMoviesAndLoading = () => {
    if (hasQuery) {
      return { movies: searchData?.results, loading: searchLoading };
    }

    if (hasGenre) {
      return { movies: genreMoviesData?.results, loading: genreLoading };
    }

    return { movies: popularData?.results, loading: popularLoading };
  };

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
      <SearchFilter
        inputText={inputText}
        onChangeText={handleChangeText}
        onSearch={handleSearch}
        selectedGenre={selectedGenre}
        onSelectedGenre={handleSelectedGenre}
        genreOptions={genreOptions}
      />

      {movies && movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">No results found</TextCustom>
        </View>
      )}
    </>
  );
};
