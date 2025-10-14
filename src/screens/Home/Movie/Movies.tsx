import { Dimensions, View } from 'react-native';
import { styles } from './style.ts';
import React, { act, useEffect, useRef, useState } from 'react';
import {
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
} from '../../../services/TMDBService.ts';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard/MovieCard.tsx';
import { DAText } from '../../../components/atoms/DAText/DAText.tsx';
import { DAButton } from '../../../components/atoms/DAButton/DAButton.tsx';
import LinearGradient from 'react-native-linear-gradient';
import { MovieList } from './components/MovieList/MovieList.tsx';
import { Movie } from '../../../types/Movie.ts';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const getSlicedList = (list: Movie[], start: number = 0, end: number = 7) => {
    return list.slice(start, end);
  };

  useEffect(() => {
    getPopularMovies().then(response => {
      setMovies(response);
    });

    getMoviesByGenre(28).then(response => {
      setActionMovies(response);
    });

    getTopRatedMovies().then(response => {
      setTopRatedMovies(response);
    });
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={ref}
          width={width}
          height={height * 0.65}
          data={getSlicedList(movies)}
          onProgressChange={progress}
          autoPlay={true}
          autoPlayInterval={5000}
          renderItem={({ item }) => (
            <MovieCard posterPath={item.poster_path} variant="carousel" />
          )}
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
        containerStyle={styles.paginationContainer}
        data={getSlicedList(movies)}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationActiveDot}
        onPress={onPressPagination}
      />

      <View style={styles.listsContainer}>
        <MovieList title="Action Movies" movies={getSlicedList(actionMovies)} />
        <MovieList title="Top Rated" movies={getSlicedList(topRatedMovies)} />
      </View>
    </ScrollView>
  );
};
