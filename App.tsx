import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigation/MyStackNavigator.tsx';
import { WishlistProvider } from './src/contexts/Wishlist/WishlistProvider';
import { MovieModalProvider } from './src/contexts/MovieModal/MovieModalProvider';
import { ThemeProvider } from './src/contexts/Theme/ThemeProvider.tsx';
import { useTheme } from './src/contexts/Theme/ThemeContext.tsx';
import { getNavigationTheme } from './src/navigation/theme.ts';

const AppContent = () => {
  const { themeMode } = useTheme();
  const navTheme = getNavigationTheme(themeMode);

  return (
    <NavigationContainer theme={navTheme}>
      <MyStackNavigator />
    </NavigationContainer>
  );
};




function App() {
  
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <SafeAreaProvider>
          <WishlistProvider>
            <MovieModalProvider>
               <AppContent /> 
            </MovieModalProvider>
          </WishlistProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
