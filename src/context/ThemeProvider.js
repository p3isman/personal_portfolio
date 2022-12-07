import { createContext, useState } from 'react';

const getInitialTheme = () => {
  const forcedTheme = window.localStorage.getItem('theme');
  const hasForcedTheme = typeof forcedTheme === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasForcedTheme) {
    return forcedTheme;
  }
  // If they haven't been explicit, let's check the media
  // query
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const hasSystemPreference = typeof systemTheme === 'boolean';
  if (hasSystemPreference) {
    return systemTheme.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
};

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState(getInitialTheme);

  const setTheme = (value) => {
    rawSetTheme(value);
    localStorage.setItem('theme', value);
  };

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
