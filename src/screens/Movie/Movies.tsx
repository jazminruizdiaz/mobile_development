import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
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

const { width, height } = Dimensions.get('window');

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

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
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.65}
        data={movies}
        autoPlay={true}
        autoPlayInterval={3000}
        onProgressChange={progress}
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
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
      <SectionsList
        sections={[
          {
            title: 'Marvel Studios',
            actionLabel: 'See more',
            onActionPress: () => console.log('See more pressed'),
          },
        ]}
      />
      ;
    </View>
  );
};

export default Movies;
