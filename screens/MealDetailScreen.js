import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  // Tìm món ăn dựa trên mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const isFavorite = favorites.includes(mealId);

  useLayoutEffect(() => {
    if (selectedMeal) {
      navigation.setOptions({
        title: selectedMeal.title,
        headerRight: () => (
          <TouchableOpacity onPress={() => {
            if (isFavorite) {
              removeFavorite(mealId);
            } else {
              addFavorite(mealId);
            }
          }}>
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={24}
              color={isFavorite ? 'red' : 'gray'}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation, selectedMeal, isFavorite]);

  return (
    <View style={styles.screen}>
      <Text>Chi tiết món: {selectedMeal ? selectedMeal.title : 'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
