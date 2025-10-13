import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { styles } from './styles.ts';
import { getPopularMovies } from '../../services/MDBService.ts';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard.tsx';
import { TextCustom } from '../../components/atoms/Text/TextCustom.tsx';
import { Button } from '../../components/atoms/Button/Button.tsx';
import LinearGradient from 'react-native-linear-gradient';
import { SectionsList } from './components/SectionsList.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../../types/Movie';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const insets = useSafeAreaInsets();

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  useEffect(() => {
    getPopularMovies().then(response => {
      if (response && response.length > 0) {
        setMovies(response.slice(0, 5));
      }
    });
  }, []);

  return (
    <ScrollView>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={styles.carouselContainer}>
          <Carousel
            ref={ref}
            width={width}
            height={height * 0.65}
            data={movies}
            autoPlay={true}
            autoPlayInterval={3000}
            onProgressChange={progress}
            renderItem={({ item }) => (
              <MovieCard posterPath={item.poster_path} />
            )}
          />
          <LinearGradient
            colors={colors.gradientOverlay}
            style={styles.gradient}
          >
            <View style={styles.overlay}>
              <View style={styles.textRow}>
                <TextCustom variant="subtitle">My list</TextCustom>
                <TextCustom variant="subtitle">Discover</TextCustom>
              </View>

              <View style={styles.buttonRow}>
                <Button
                  title="+ Wishlist"
                  variant="secondary"
                  onPress={() => console.log('Wishlist pressed')}
                />
                <Button
                  title="Details"
                  variant="primary"
                  onPress={() => console.log('Details pressed')}
                />
              </View>
            </View>
          </LinearGradient>

          <Pagination.Basic
            progress={progress}
            data={movies}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            activeDotStyle={styles.paginationActiveDot}
            onPress={onPressPagination}
          />
        </View>
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
