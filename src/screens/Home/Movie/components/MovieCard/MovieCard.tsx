import { TMDB_IMAGE_BASE_URL } from '@env';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { DAText } from '../../../../../components/atoms/DAText/DAText';

interface MovieCardProps {
  posterPath: string;
  title?: string;
  style?: object;
  variant?: 'carousel' | 'list';
}

export const MovieCard = ({
  posterPath,
  title,
  style,
  variant = 'list',
}: MovieCardProps) => {
  const imageURL = `${TMDB_IMAGE_BASE_URL}${posterPath}`;

  const getPoterStyle = () => {
    switch (variant) {
      case 'carousel':
        return styles.carouselPoster;
      case 'list':
      default:
        return styles.listPoster;
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageURL }}
        style={[getPoterStyle(), style]}
        resizeMode="cover"
      />

      {title && (
        <DAText variant="body" style={styles.title} numberOfLines={2}>
          {title}
        </DAText>
      )}
    </View>
  );
};
