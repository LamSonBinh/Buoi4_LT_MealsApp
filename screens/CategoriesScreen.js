import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'; // Import dữ liệu

const CategoriesScreen = ({ navigation }) => {

  // Cập nhật tiêu đề màn hình khi component được render
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Danh mục', // Tiêu đề màn hình bằng tiếng Việt
    });
  }, [navigation]);

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={() => {
          navigation.navigate('MealsOverview', { categoryId: itemData.item.id }); // Truyền categoryId vào
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} numColumns={2} />;
};

export default CategoriesScreen;
