import React, { useLayoutEffect, useState } from 'react';
import { FlatList, View, TextInput, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next'; 
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data'; 
import { useTheme } from '../context/ThemeContext'; 

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params; 
  const { i18n } = useTranslation(); 
  const { isDarkMode } = useTheme(); 

  const [searchText, setSearchText] = useState('');
  const [displayedMeals, setDisplayedMeals] = useState(
    MEALS.filter(meal => meal.categoryId === categoryId)
  );

  useLayoutEffect(() => {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    const categoryTitle = category ? (i18n.language === 'vi' ? category.title.vi : category.title.en) : 'Category'; 

    navigation.setOptions({
      title: categoryTitle,
    });

    const filteredMeals = MEALS.filter(meal => 
      meal.categoryId === categoryId &&
      (i18n.language === 'vi' ? meal.title.vi : meal.title.en).toLowerCase().includes(searchText.toLowerCase())
    );
    
    setDisplayedMeals(filteredMeals);
  }, [navigation, categoryId, searchText, i18n.language]); 

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={i18n.language === 'vi' ? itemData.item.title.vi : itemData.item.title.en} 
        image={itemData.item.image}
        onPress={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id }); 
        }}
      />
    );
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDarkMode ? '#333' : '#8bc498' }]}> 
      <TextInput
        style={[styles.searchBar, { backgroundColor: isDarkMode ? '#555' : '#ebe6e6', color: isDarkMode ? '#fff' : '#000' }]}
        placeholder={i18n.language === 'vi' ? "Tìm kiếm món..." : "Search meals..."} 
        placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MealsOverviewScreen;
