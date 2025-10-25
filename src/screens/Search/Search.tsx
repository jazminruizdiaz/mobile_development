import { SearchMovies } from '../../components/organisms/SearchMovies/SearchMovies';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { useThemedColors } from '../../hooks/useThemedColors'; 

export const Search = () => {
  const colors = useThemedColors(); 

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader title="Search" />
      <SearchMovies />
    </SafeAreaView>
  );
};
