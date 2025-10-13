import { Dimensions, View } from 'react-native';
import { styles } from './style.ts';
import React, { useEffect, useRef, useState } from 'react';
import { getPopularMovies } from '../../../services/TMDBService.ts';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard.tsx';
import { DAText } from '../../../components/atoms/DAText/DAText.tsx';
import { DAButton } from '../../../components/atoms/DAButton/DAButton.tsx';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    getPopularMovies().then(response => {
      setMovies(response);
    });
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
  };
  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={ref}
          width={width}
          height={height * 0.65}
          data={movies}
          onProgressChange={progress}
          autoPlay={true}
          autoPlayInterval={5000}
          renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
        />

        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.95)']}
          style={styles.gradient}
        >
          <View style={styles.textRow}>
            <DAText variant="subtitle"> My List</DAText>
            <DAText variant="subtitle"> Discover</DAText>
          </View>

          <View style={styles.buttonRow}>
            <DAButton
              title="+ Wishlist"
              variant="secondary"
              onPress={() => console.log('Wishlist pressed')}
            />
            <DAButton
              title="Details"
              variant="primary"
              onPress={() => console.log('Details pressed')}
            />
          </View>
        </LinearGradient>
      </View>
      <Pagination.Basic
        progress={progress}
        data={movies}
        dotStyle={{
          backgroundColor: 'rgba(255,255,255,0.3)',
          borderRadius: 50,
        }}
        activeDotStyle={{
          backgroundColor: 'rgba(255,255,255,0.9)',
        }}
        containerStyle={{ gap: 5, marginTop: 20 }}
        onPress={onPressPagination}
      />
    </View>
  );
};
