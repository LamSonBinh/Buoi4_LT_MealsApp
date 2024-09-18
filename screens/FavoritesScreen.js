import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import { useTranslation } from 'react-i18next'; 
import { useTheme } from '../context/ThemeContext'; 

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const { i18n } = useTranslation(); 
  const { isDarkMode } = useTheme(); 
  const favoriteMeals = MEALS.filter(meal => favorites.includes(meal.id));

  const getTextValue = (meal, language) => {
    return {
      title: language === 'vi' ? meal.title.vi : meal.title.en,
      description: language === 'vi' ? meal.description.vi : meal.description.en
    };
  };

  const renderMealItem = (itemData) => {
    const { title, description } = getTextValue(itemData.item, i18n.language);

    return (
      <MealItem
        title={title}
        image={itemData.item.image}
        onPress={() => {

          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff' }]}>
      {favoriteMeals.length > 0 ? (
        <FlatList 
          style={[styles.list, { backgroundColor: isDarkMode ? '#2e2e2e' : '#8bc498' }]}
          data={favoriteMeals} 
          renderItem={renderMealItem} 
          keyExtractor={item => item.id} 
        />
      ) : (
        <Text style={[styles.message, { color: isDarkMode ? '#ddd' : '#000' }]}>
          {i18n.language === 'vi' ? "Hiện không có món nào." : "There are no items available at the moment."}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default FavoritesScreen;
