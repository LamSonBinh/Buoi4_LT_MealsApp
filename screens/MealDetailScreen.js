import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useTranslation } from 'react-i18next'; 
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import { useTheme } from '../context/ThemeContext'; 

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { i18n } = useTranslation(); 
  const { isDarkMode } = useTheme(); 
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const isFavorite = favorites.includes(mealId);

  useLayoutEffect(() => {
    if (selectedMeal) {
      navigation.setOptions({
        title: i18n.language === 'vi' ? selectedMeal.title.vi : selectedMeal.title.en, 
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
              color={isFavorite ? 'red' : isDarkMode ? 'tomato' : 'white'}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation, selectedMeal, isFavorite, i18n.language, isDarkMode]); 

  if (!selectedMeal) {
    return (
      <View style={[styles.screen, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Loading...</Text>
      </View>
    );
  }

  const getTextValue = (value) => {
    return typeof value === 'string' ? value : 'N/A';
  };

  return (
    <ScrollView style={[styles.screen, { backgroundColor: isDarkMode ? '#333' : '#8bc498' }]}>
      <Image source={selectedMeal.image} style={styles.image} />
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        {getTextValue(i18n.language === 'vi' ? selectedMeal.title.vi : selectedMeal.title.en)}
      </Text>
      <Text style={[styles.description, { color: isDarkMode ? '#ddd' : '#000' }]}>
        {getTextValue(i18n.language === 'vi' ? selectedMeal.description.vi : selectedMeal.description.en)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 10, 
    marginTop: 20, 
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});

export default MealDetailScreen;
