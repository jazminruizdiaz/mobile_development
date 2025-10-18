import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigation/MyStackNavigator.tsx';
import { WishlistProvider } from './src/contexts/Wishlist/WishlistProvider';
import { MovieModalProvider } from './src/contexts/MovieModal/MovieModalProvider';

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <WishlistProvider>
          <MovieModalProvider>
            <NavigationContainer>
              <MyStackNavigator />
            </NavigationContainer>
          </MovieModalProvider>
        </WishlistProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
