import { Image, ImageStyle, StyleProp } from 'react-native';
import { styles } from './styles';
import { TMDB_IMAGE_BASE_URL } from '@env';

interface MovieCardProps {
  posterPath: string;
  style?: StyleProp<ImageStyle>;
}

export const MovieCard = ({ posterPath, style }: MovieCardProps) => {
  const imageUrl = `${TMDB_IMAGE_BASE_URL}${posterPath}`;

  return (
    <Image
      source={{ uri: imageUrl }}
      style={style || styles.poster}
      resizeMode="cover"
    />
  );
};
