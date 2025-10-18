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
import { Genre, GENRES } from '../../constants/genres';
import LinearGradient from 'react-native-linear-gradient';
import { PromoBanner } from '../Movie/components/promo/PromoBanner.tsx';
import { SectionData } from '../../types/Section.ts';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();
  const [genre, setGenre] = useState<Genre>(GENRES[0]);
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

  const handleGenreChange = (genre: Genre) => {
    setGenre(genre);
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
            onChange={handleGenreChange}
          />
        </LinearGradient>
        <MovieCarousel movies={movies} />
        {genre.name === 'All' ? (
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
        ) : (
          <SectionsList
            sections={[
              {
                type: 'Genre',
                title: genre.name,
                actionLabel: 'See more',
                genreId: genre.id,
              },
            ]}
            onSeeMore={handleSeeMore}
          />
        )}
        <PromoBanner
          image={require('../../assets/saveupto.jpg')}
          title="Black Friday is here!"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam ex quas autem quae nisi nihil totam culpa earum ipsam illum debitis corporis vero"
          buttonText="Check details"
          onPress={() => console.log('Black Friday')}
        />
      </View>
    </ScrollView>
  );
};

export default Movies;
