import ThemeProvider from 'context/ThemeProvider';
import { AppWrapper } from 'wrapper';
import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
};

export default App;
