import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data'; // Import dữ liệu

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params; // Nhận categoryId từ màn hình trước

  // Lọc các món ăn thuộc danh mục được chọn
  const displayedMeals = MEALS.filter((meal) => meal.categoryId === categoryId);

  // Tìm tên danh mục dựa trên categoryId
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const categoryTitle = category ? category.title : 'Danh mục';

  // Cập nhật tiêu đề màn hình khi component được render
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id }); // Điều hướng đến chi tiết món ăn
        }}
      />
    );
  };

  return <FlatList data={displayedMeals} renderItem={renderMealItem} />;
};

export default MealsOverviewScreen;
