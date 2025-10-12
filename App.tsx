import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Movies } from './src/screens/Home/Movie/Movies';

function App() {
  return (
    <SafeAreaProvider>
      <Movies />
    </SafeAreaProvider>
  );
}

export default App;
