import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles.ts';
import { getPopularMovies } from '../../services/MDBService.ts';
import { SectionsList } from './components/SectionsList.tsx';
import { MovieCarousel } from './components/MovieCarousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../../types/Movie';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getPopularMovies().then(response => {
      if (response && response.length > 0) {
        setMovies(response.slice(0, 5));
      }
    });
  }, []);

  const handleWishlistPress = () => {
    console.log('Wishlist pressed');
  };

  const handleDetailsPress = () => {
    console.log('Details pressed');
  };

  return (
    <ScrollView>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <MovieCarousel
          movies={movies}
          onWishlistPress={handleWishlistPress}
          onDetailsPress={handleDetailsPress}
        />
        <SectionsList
          sections={[
            {
              type: 'Company',
              title: 'Marvel Studios',
              actionLabel: 'See more',
              onActionPress: () => console.log('See more pressed'),
              companyId: 420,
            },
            {
              type: 'Genre',
              title: 'Action',
              actionLabel: 'See more',
              onActionPress: () => console.log('See more action pressed'),
              genreId: 28,
            },
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default Movies;
