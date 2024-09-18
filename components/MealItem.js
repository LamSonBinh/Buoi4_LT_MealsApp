import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

const MealItem = ({ title, image, onPress }) => {
  const { isDarkMode } = useTheme(); 

  return (
    <View style={[styles.mealItem, { backgroundColor: isDarkMode ? '#444' : '#fff' }]}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader, styles.imageContainer]}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={[styles.mealRow, styles.mealDetail, { backgroundColor: isDarkMode ? '#555' : '#f8f8f8' }]}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#333' }]}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5, 
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  image: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontFamily: 'sans-serif-medium', 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
  },
});

export default MealItem;
