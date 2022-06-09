import React from 'react';
import AppContext from './context/AppContextProvider';
import './App.scss';
import { AppWrapper } from './wrapper';

const App = () => {
  return (
    <AppContext>
      <AppWrapper />
    </AppContext>
  );
};

export default App;
