import { createContext, useEffect, useRef, useState } from 'react';

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const systemTheme =
    matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  const [theme, setTheme] = useState(systemTheme);

  useEffect(() => {
    const forcedTheme = localStorage.getItem('theme');
    if (forcedTheme) {
      setTheme(forcedTheme);
    }
  }, []);

  const inputRef = useRef(null);

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const contextValue = {
    theme,
    onChangeTheme,
    inputRef,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
