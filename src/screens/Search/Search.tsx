import { View } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { SearchMovies } from './SearchMovies';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Search = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TextCustom variant="title" style={styles.title}>
        Search
      </TextCustom>
      <SearchMovies />
    </View>
  );
};
