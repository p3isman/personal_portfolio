import { createContext, useRef, useState } from 'react';

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const storedTheme = window.localStorage.getItem('theme');
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(
    storedTheme ?? prefersDarkTheme.matches ? 'dark' : 'light'
  );
  const inputRef = useRef(null);

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', theme);
  };

  const contextValue = {
    theme,
    onChangeTheme,
    inputRef
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
