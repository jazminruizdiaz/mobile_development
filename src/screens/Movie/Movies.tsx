import React, { useEffect, useState } from 'react';
import { ScrollView, View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles.ts';
import { getPopularMovies } from '../../services/MDBService.ts';
import { SectionsList } from './components/sections/SectionsList.tsx';
import { MovieCarousel } from './components/carousel/MovieCarousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GenresBar } from './components/genre/GenresBar.tsx';
import { Movie } from '../../types/Movie';
import { colors } from '../../constants/colors.ts';
import { GENRES } from '../../constants/genres';
import LinearGradient from 'react-native-linear-gradient';
import { MovieDetailModal } from './components/modals/MovieDetailModal';
import { SectionData } from '../../types/Section.ts';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();
  const [genre, setGenre] = useState('All');
  const top = insets.top;
  const bottom = insets.bottom;
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<number>(0);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const navigation = useNavigation<any>();

  useEffect(() => {
    setLoading(true);
    getPopularMovies()
      .then(response => {
        if (response && response.length > 0) {
          setMovies(response.slice(0, 5));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  const handleDetailsPress = (movie_id: number) => {
    setSelectedMovie(movie_id);
    setShowDetailModal(true);
  };

  const handleWishlistToggle = (movie_id: number) => {
    setWishlist(prev => {
      if (prev.includes(movie_id)) {
        return prev.filter(id => id !== movie_id);
      } else {
        return [...prev, movie_id];
      }
    });
  };

  const handleSeeMore = (section: SectionData) => {
    navigation.navigate('SectionDetails', {
      type: section.type,
      title: section.title,
      companyId: section.companyId,
      genreId: section.genreId,
    });
  };

  if (loading) {
    return (
      <View style={[styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading movies...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={[styles.container, { paddingBottom: bottom }]}>
        <LinearGradient
          colors={colors.gradientOverlayTop}
          style={styles.gradientTop}
        >
          <GenresBar
            genres={GENRES}
            active={genre}
            onChange={setGenre}
            top={top}
          />
        </LinearGradient>
        <MovieCarousel
          movies={movies}
          onWishlistPress={handleWishlistToggle}
          onDetailsPress={handleDetailsPress}
          wishlist={wishlist}
        />
        <SectionsList
          sections={[
            {
              type: 'Company',
              title: 'Marvel Studios',
              actionLabel: 'See more',
              companyId: 420,
            },
            {
              type: 'Genre',
              title: 'Action',
              actionLabel: 'See more',
              genreId: 28,
            },
            {
              type: 'Best movies',
              title: 'Best movies',
              actionLabel: 'See more',
            },
          ]}
          onSeeMore={handleSeeMore}
          onMoviePress={handleDetailsPress}
          onWishlistToggle={handleWishlistToggle}
          wishlist={wishlist}
        />
        <MovieDetailModal
          movie_id={selectedMovie}
          showDetailModal={showDetailModal}
          closeDetailModal={closeDetailModal}
        />
      </View>
    </ScrollView>
  );
};

export default Movies;
