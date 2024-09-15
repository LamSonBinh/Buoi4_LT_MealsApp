import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CategoryGridTile = ({ title, image, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 100,
    shadowColor: 'gray',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CategoryGridTile;
