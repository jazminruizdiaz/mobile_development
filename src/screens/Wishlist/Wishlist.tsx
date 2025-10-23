import React, { useCallback } from 'react';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { MovieGrid } from '../Movie/components/grid/MovieGrid';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchFilter } from '../../components/molecules/SearchFilter/SearchFilter';
import { View } from 'react-native';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import { Movie } from '../../types/Movie';
import { useGenresOptions } from '../../hooks/useGenresOptions';
import { useFocusEffect } from '@react-navigation/native';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  const {
    inputText,
    selectedGenre,
    activeGenre,
    activeQuery,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
    isSearchActive,
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

  const filterMovies = (movies: Movie[]) => {
    if (!isSearchActive) return movies;

    return movies.filter(movie => {
      const matchesGenre = activeGenre
        ? movie.genre_ids.includes(Number(activeGenre))
        : true;

      const matchesQuery = activeQuery
        ? movie.title.toLowerCase().includes(activeQuery.toLowerCase())
        : true;

      return matchesGenre && matchesQuery;
    });
  };

  const filteredMovies = filterMovies(wishlist);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Wishlist" />

      <SearchFilter
        inputText={inputText}
        onChangeText={handleChangeText}
        onSearch={handleSearch}
        selectedGenre={selectedGenre}
        onSelectedGenre={handleSelectedGenre}
        genreOptions={genreOptions}
        placeholder="Search movies in wishlist"
      />
      {filteredMovies.length ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            No movies found in your Wishlist
          </TextCustom>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;
