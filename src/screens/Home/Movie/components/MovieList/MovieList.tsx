import { DAText } from '../../../../../components/atoms/DAText/DAText';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Movie } from '../../../../../types/Movie';
import { FlatList } from 'react-native-gesture-handler';
import { MovieCard } from '../MovieCard/MovieCard';
import { colors } from '../../../../../constants/colors';
import { DAButton } from '../../../../../components/atoms/DAButton/DAButton';

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DAText variant="subtitle">{title}</DAText>
        <DAButton
          title="See More"
          onPress={() => {
            console.log('test');
          }}
          variant="text"
        />
      </View>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MovieCard
            posterPath={item.poster_path}
            title={item.title}
            variant="list"
          />
        )}
      />
    </View>
  );
};
