import React, { useMemo, useState } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { SectionsList } from '../../components/organisms/MovieSections/SectionsList';
import { MovieCarousel } from '../../components/organisms/MovieCarousel/MovieCarousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GenresBar } from '../../components/molecules/GenresBar/GenresBar';
import { GENRES } from '../../constants/genres';
import LinearGradient from 'react-native-linear-gradient';
import { PromoBanner } from '../../components/organisms/PromoBanner/PromoBanner';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { SectionData } from '../../types/Section';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParams } from '../../types/StackNavigator';
import { useThemedColors } from '../../hooks/useThemedColors';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { Genre } from '../../types/Movie';

const Movies = () => {
  const { data, loading } = usePopularMovies();
  const insets = useSafeAreaInsets();
  const [genre, setGenre] = useState<Genre>(GENRES[0]);
  const bottom = insets.bottom;
  const colors = useThemedColors();

  const navigation = useNavigation<NavigationProp<StackParams>>();
  const movies = useMemo(() => data?.results?.slice(0, 5) ?? [], [data]);

  const handleGenreChange = (genre: Genre) => setGenre(genre);

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
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
        <TextCustom style={[styles.loadingText, { color: colors.textPrimary }]}>
          Loading movies...
        </TextCustom>
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.background, paddingBottom: bottom },
        ]}
      >
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
