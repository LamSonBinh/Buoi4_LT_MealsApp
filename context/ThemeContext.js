import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';
import { useTranslation } from 'react-i18next';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, language, changeLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
