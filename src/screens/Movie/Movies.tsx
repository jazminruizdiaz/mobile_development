import React, { useState } from 'react';
import { ScrollView, View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles.ts';
import { SectionsList } from './components/sections/SectionsList.tsx';
import { MovieCarousel } from './components/carousel/MovieCarousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GenresBar } from './components/genre/GenresBar.tsx';
import { colors } from '../../constants/colors.ts';
import { GENRES } from '../../constants/genres';
import LinearGradient from 'react-native-linear-gradient';
import { PromoBanner } from '../Movie/components/promo/PromoBanner.tsx';
import { usePopularMovies } from '../../hooks/usePopularMovies.ts';
import { SectionData } from '../../types/Section.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParams } from '../../types/StackNavigator.ts';
import { Genre } from '../../types/Movie.ts';

const Movies = () => {
  const { data, loading } = usePopularMovies();
  const insets = useSafeAreaInsets();
  const [genre, setGenre] = useState<Genre>(GENRES[0]);
  const bottom = insets.bottom;

  const navigation = useNavigation<NavigationProp<StackParams>>();

  const movies = data?.results?.slice(0, 5) || [];

  const handleGenreChange = (genre: Genre) => {
    setGenre(genre);
  };

  const handleSeeMore = (section: SectionData) => {
    navigation.navigate('SeeMore', {
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
