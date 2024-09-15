import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

// Tạo Stack Navigator cho phần Meals
function MealsStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Danh Mục' }} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ title: 'Danh Sách Món Ăn' }} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Chi Tiết Món Ăn' }} />
    </Stack.Navigator>
  );
}

// Tạo Bottom Tabs Navigator với các tên màn hình khác nhau
function TabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'MealsTab') {
            iconName = 'food'; // MaterialCommunityIcons
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'FavoritesTab') {
            iconName = 'heart'; // AntDesign
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTabs.Screen name="MealsTab" component={MealsStackNavigator} options={{ title: 'Món Ăn' }} />
      <BottomTabs.Screen name="FavoritesTab" component={FavoritesScreen} options={{ title: 'Yêu Thích' }} />
    </BottomTabs.Navigator>
  );
}

// Tạo Drawer Navigator với các tên màn hình khác nhau
export default function MealsNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsDrawer" component={TabNavigator} options={{ title: 'Bình Foods' }} />
      <Drawer.Screen name="SettingsDrawer" component={SettingsScreen} options={{ title: 'Cài Đặt' }} />
    </Drawer.Navigator>
  );
}
