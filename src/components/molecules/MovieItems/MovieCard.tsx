import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { TMDB_IMAGE_BASE_URL } from '@env';
import { useThemedColors } from '../../../hooks/useThemedColors';

interface MovieCardProps {
  posterPath: string;
  style?: StyleProp<ViewStyle>;
}
const DEFAULT_CAST_IMG = require('../../../assets/nomovieposterfound.jpeg');
export const MovieCard = ({ posterPath, style }: MovieCardProps) => {
  const colors = useThemedColors();
  const [isLoading, setIsLoading] = useState(Boolean(posterPath));
  const imageUrl = `${TMDB_IMAGE_BASE_URL}${posterPath}`;
  const imageSource = posterPath ? { uri: imageUrl } : DEFAULT_CAST_IMG;

  const handleLoadStart = () => {
    if (posterPath) {
      setIsLoading(true);
    }
  };

  return (
    <View style={[styles.posterWrapper, styles.poster, style]}>
      <Image
        source={imageSource}
        style={styles.posterImage}
        resizeMode="cover"
        onLoadStart={handleLoadStart}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
    </View>
  );
};
