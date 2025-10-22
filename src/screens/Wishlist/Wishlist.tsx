import React from 'react';
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
import { useGenreOptions } from '../../hooks/useGenreOptions';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  const {
    inputText,
    selectedGenre,
    handleChangeText,
    handleSearch,
    handleSelectedGenre,
    isSearchActive,
  } = useSearchFilter();

  const { genreOptions } = useGenreOptions();

  const filterMovies = (movies: Movie[]) => {
    if (!isSearchActive) return movies;

    return movies.filter(movie => {
      const matchGenre = selectedGenre
        ? movie.genre_ids.includes(Number(selectedGenre))
        : true;

      const matchText = inputText.trim()
        ? movie.title.toLowerCase().includes(inputText.trim().toLowerCase())
        : true;

      return matchGenre && matchText;
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
        searchButtonText="Filter"
        placeholder="Search movies in wishlist"
      />
      {filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <View style={styles.emptyContent}>
          <TextCustom variant="body">
            {isSearchActive
              ? 'No movies match ypur search'
              : 'No movies found in your Wishlist'}
          </TextCustom>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;
