import { SearchMovies } from './components/SearchMovies';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';

export const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Search" />
      <SearchMovies />
    </SafeAreaView>
  );
};
