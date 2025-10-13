import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style.ts';
import React, { useEffect, useRef, useState } from 'react';
import { getPopularMovies } from '../../../services/TMDBService.ts';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard.tsx';
import { DAText } from '../../../components/atoms/DAText/DAText.tsx';
import { DAButton } from '../../../components/atoms/DAButton/DAButton.tsx';

const data = [...new Array(6).keys()];
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
      </View>
    </View>
  );
};
