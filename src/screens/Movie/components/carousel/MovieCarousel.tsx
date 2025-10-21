import React, { useMemo, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Movie } from '../../../../types/Movie';
import { MovieOverlay } from './MovieOverlay';
import { styles } from './styles';
import { MovieCard } from '../items/MovieCard';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

const { width, height } = Dimensions.get('window');

type Props = {
  movies: Movie[];
};

export const MovieCarousel = ({ movies }: Props) => {
  const { themeMode } = useTheme();
    const colors = getThemeColors(themeMode);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentMovie = useMemo(
    () => movies[activeIndex],
    [movies, activeIndex],
  );

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.65}
        data={movies}
        autoPlay={true}
        autoPlayInterval={3000}
        onProgressChange={progress}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />
      <LinearGradient
        colors={colors.gradientOverlayBottom}
        style={styles.gradientBottom}
      >
        <MovieOverlay movie={currentMovie} />
      </LinearGradient>
      <Pagination.Basic
        progress={progress}
        data={movies}
        containerStyle={styles.paginationContainer}
        dotStyle={ styles.paginationDot }
        activeDotStyle={styles.paginationActiveDot}
        onPress={onPressPagination}
      />
    </View>
  );
};
