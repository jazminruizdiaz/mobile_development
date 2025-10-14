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
  onActionPress,
  type,
  companyId,
  genreId,
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
        onActionPress={onActionPress}
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          if (type === 'Best movies') {
            return <BestMovieItem {...item} />;
          }
          return <MovieItem {...item} />;
        }}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
