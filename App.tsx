import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigation/MyStackNavigator.tsx';
import { WishlistProvider } from './src/contexts/Wishlist/WishlistProvider';

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <WishlistProvider>
          <NavigationContainer>
            <MyStackNavigator />
          </NavigationContainer>
        </WishlistProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
