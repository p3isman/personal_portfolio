import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Work } from './container/index';

const App = () => {
  return (
    <div className='app app__relative'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
