import { View } from 'react-native';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { SearchMovies } from './SearchMovies';
import { styles } from './styles';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';

export const Search = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <ScreenHeader title="Search" />
      </View>
      <SearchMovies />
    </SafeAreaView>
  );
};
