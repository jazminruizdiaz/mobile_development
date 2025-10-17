import { FlatList } from 'react-native';
import { MovieSectionHeader } from './MovieSectionHeader';
import { MovieItem } from '../items/MovieItem';
import { Movie } from '../../../../types/Movie';
import { SectionContent } from '../../../../types/Section';
import { useEffect, useState } from 'react';
import {
  getMoviesByCompanyId,
  getMoviesByGenreId,
  getBestMovies,
} from '../../../../services/MDBService';
import { BestMovieItem } from '../items/BestMovieItem';

export const MovieSection = ({
  title,
  actionLabel,
  onSeeMore,
  type,
  companyId,
  genreId,
  onMoviePress,
  onWishlistToggle,
  wishlist,
}: SectionContent) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    if (type === 'Company' && companyId) {
      getMoviesByCompanyId(companyId).then(response => {
        setMovies(response);
      });
    } else if (type === 'Genre' && genreId) {
      getMoviesByGenreId(genreId).then(response => {
        setMovies(response);
      });
    } else if (type === 'Best movies') {
      getBestMovies().then(response => {
        setMovies(response);
      });
    }
  }, []);
  return (
    <>
      <MovieSectionHeader
        title={title}
        actionLabel={actionLabel}
        onSeeMore={() =>
          onSeeMore({ type, title, companyId, genreId, actionLabel })
        }
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          const isInWishlist = wishlist.includes(item.id);
          if (type === 'Best movies') {
            return (
              <BestMovieItem
                {...item}
                onPress={() => onMoviePress(item.id)}
                onWishlistToggle={() => onWishlistToggle(item.id)}
                isInWishlist={isInWishlist}
              />
            );
          }
          return (
            <MovieItem
              {...item}
              onPress={() => onMoviePress(item.id)}
              onWishlistToggle={() => onWishlistToggle(item.id)}
              isInWishlist={isInWishlist}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
