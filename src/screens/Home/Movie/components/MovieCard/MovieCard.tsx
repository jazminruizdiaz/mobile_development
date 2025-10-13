import { TMDB_IMAGE_BASE_URL } from '@env';
import { Image } from 'react-native';
import { styles } from './styles';

interface MovieCardProps {
  posterPath: string;
}

export const MovieCard = ({ posterPath }: MovieCardProps) => {
  const imageURL = `${TMDB_IMAGE_BASE_URL}${posterPath}`;

  return (
    <Image
      source={{ uri: imageURL }}
      style={styles.poster}
      resizeMode="cover"
    />
  );
};
