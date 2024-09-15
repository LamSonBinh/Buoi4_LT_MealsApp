import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import { FavoritesProvider } from './context/FavoritesContext'; // Import provider

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <MealsNavigator />
      </FavoritesProvider>
    </NavigationContainer>
  );
}
