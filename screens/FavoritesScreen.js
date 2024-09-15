import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => { // Thêm navigation vào tham số
  const { favorites } = useContext(FavoritesContext);

  // Lọc các món ăn yêu thích
  const favoriteMeals = MEALS.filter(meal => favorites.includes(meal.id));

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={() => {
          // Điều hướng đến chi tiết món ăn
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      {favoriteMeals.length > 0 ? (
        <FlatList style={styles.screen2} data={favoriteMeals} renderItem={renderMealItem} keyExtractor={item => item.id} />
      ) : (
        <Text>Hiện không có món nào.</Text>
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
  screen2: {
    height: 250,
    width: '100%',
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5, // Hiển thị bóng trên Android
  },
});

export default FavoritesScreen;
