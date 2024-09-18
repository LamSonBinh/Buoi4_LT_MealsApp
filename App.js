import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import { FavoritesProvider } from './context/FavoritesContext'; 
import './i18n';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <FavoritesProvider>
          <MealsNavigator />
        </FavoritesProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
