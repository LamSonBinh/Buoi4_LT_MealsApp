import React, { useLayoutEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'; 
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext'; 

const CategoriesScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(); 
  const { isDarkMode } = useTheme(); 
  useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Categories'), 
    });
  }, [navigation, t]); 

  const renderCategoryItem = (itemData) => {
    const { id, image, title } = itemData.item;
    return (
      <CategoryGridTile
        title={i18n.language === 'vi' ? title.vi : title.en} 
        image={image}
        onPress={() => {
          navigation.navigate('MealsOverview', { categoryId: itemData.item.id }); 
        }}
      />
    );
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDarkMode ? '#333' : '#8bc498' }]}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoriesScreen;
