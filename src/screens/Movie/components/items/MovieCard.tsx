import { Image, ImageStyle, StyleProp } from 'react-native';
import { createStyles } from './styles';
import { TMDB_IMAGE_BASE_URL } from '@env';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

interface MovieCardProps {
  posterPath: string;
  style?: StyleProp<ImageStyle>;
}

export const MovieCard = ({ posterPath, style }: MovieCardProps) => {
  const imageUrl = `${TMDB_IMAGE_BASE_URL}${posterPath}`;

  const { themeMode, toggleThemeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);
  return (
    <Image
      source={{ uri: imageUrl }}
      style={style || styles.poster}
      resizeMode="cover"
    />
  );
};
