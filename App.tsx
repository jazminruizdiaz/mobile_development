import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Movies } from './src/screens/Home/Movie/Movies';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Movies />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
