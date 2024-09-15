import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MealItem = ({ title, image, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader, ...styles.imageContainer }}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.title}>{title}</Text>
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
    elevation: 5, // Hiển thị bóng trên Android
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
    backgroundColor: '#f8f8f8', // Màu nền nhạt cho phần tiêu đề
  },
  imageContainer: {
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  image: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontFamily: 'sans-serif-medium', // Đổi font chữ
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Màu chữ đậm
    textAlign: 'center',
  },
});

export default MealItem;
