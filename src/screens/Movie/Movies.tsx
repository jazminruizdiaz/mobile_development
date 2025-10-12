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
        onProgressChange={progress}
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />

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

      <Pagination.Basic
        progress={progress}
        data={movies}
        size={15}
        dotStyle={{
          borderRadius: 100,
          backgroundColor: '#262626',
        }}
        activeDotStyle={{
          borderRadius: 100,
          overflow: 'hidden',
          backgroundColor: '#f1f1f1',
        }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default Movies;
