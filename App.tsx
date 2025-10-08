import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './android/src/screens/Home/Home';

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
