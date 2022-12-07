import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeProvider';
import Navbar from 'container/Header/Navbar/Navbar';
import { About, Footer, Header, Skills, Work } from 'container/index';

const AppWrapper = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`app app__relative ${
        theme === 'dark' ? 'theme-dark' : 'theme-light'
      }`}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default AppWrapper;
