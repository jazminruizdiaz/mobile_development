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
import { SectionData } from '../../types/Section.ts';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();
  const [genre, setGenre] = useState('All');
  const top = insets.top;
  const bottom = insets.bottom;

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
        <MovieCarousel movies={movies} />
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
        />
      </View>
    </ScrollView>
  );
};

export default Movies;
