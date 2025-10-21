import { SearchMovies } from './components/SearchMovies';
import { createStyles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { useTheme } from '../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../constants/colorsFun';

export const Search = () => {
  const { themeMode, toggleThemeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Search" />
      <SearchMovies />
    </SafeAreaView>
  );
};
