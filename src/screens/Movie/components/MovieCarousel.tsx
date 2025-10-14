import React, { useRef } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Movie } from '../../../types/Movie';
import { colors } from '../../../constants/colors';
import { MovieCard } from './MovieCard';
import { MovieOverlay } from './MovieOverlay';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

type Props = {
  movies: Movie[];
  onWishlistPress: () => void;
  onDetailsPress: () => void;
};

export const MovieCarousel = ({
  movies,
  onWishlistPress,
  onDetailsPress,
}: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

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
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />
      <LinearGradient colors={colors.gradientOverlay} style={styles.gradient}>
        <MovieOverlay
          onWishlistPress={onWishlistPress}
          onDetailsPress={onDetailsPress}
        />
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
  );
};
