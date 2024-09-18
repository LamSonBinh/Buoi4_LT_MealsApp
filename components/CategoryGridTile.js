import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

const CategoryGridTile = ({ title, image, onPress }) => {
  const { isDarkMode } = useTheme(); 

  return (
    <View style={[styles.gridItem, { backgroundColor: isDarkMode ? '#333' : '#DADADA' }]}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#444' : '#fff', shadowColor: isDarkMode ? '#000' : '#DADADA' }]}>
          <Image source={image} style={styles.image} />
          <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 290,
    backgroundColor: '#DADADA',
    borderRadius: 20,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#DADADA',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
//    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '65%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CategoryGridTile;
