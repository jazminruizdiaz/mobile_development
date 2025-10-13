import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style.ts';
import React, { useEffect, useRef } from 'react';
import { getPopularMovies } from '../../../services/TMDBService.ts';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

const data = [...new Array(6).keys()];
const { width } = Dimensions.get('window');

export const Movies = () => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    getPopularMovies().then(response => {
      console.log('Popular Movies:', response);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Carousel
          ref={ref}
          width={width}
          height={width / 2}
          data={data}
          onProgressChange={progress}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />

        <Text style={styles.titleSection}>My List</Text>
        <Text style={styles.titleSection}>Discover</Text>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
