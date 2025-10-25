import App from './App.tsx';
import { ThemeProvider } from './src/contexts/Theme/ThemeProvider';

function Index() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Index;
