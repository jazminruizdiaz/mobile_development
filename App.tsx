import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigation/MyStackNavigator.tsx';
import { WishlistProvider } from './src/contexts/Wishlist/WishlistProvider';
import { MovieModalProvider } from './src/contexts/MovieModal/MovieModalProvider';
import { useTheme } from './src/contexts/Theme/ThemeContext.tsx';
import { getNavigationTheme } from './src/navigation/theme.ts';
import { useMemo } from 'react';


function App() {
  const { themeMode } = useTheme();
   const navTheme = useMemo(() => {
    return getNavigationTheme(themeMode);
  }, [themeMode]);
  
  return (
    <GestureHandlerRootView>
        <SafeAreaProvider>
          <WishlistProvider>
            <MovieModalProvider>
              <NavigationContainer theme={navTheme}>
                <MyStackNavigator />
              </NavigationContainer>
            </MovieModalProvider>
          </WishlistProvider>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
