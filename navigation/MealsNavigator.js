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
import { useTranslation } from 'react-i18next'; 
import { useTheme } from '../context/ThemeContext'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();


function MealsStackNavigator() {
  const { t } = useTranslation(); 
  const { isDarkMode } = useTheme(); 

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#968783', 
        },
        headerTintColor: isDarkMode ? 'tomato' : '#fff', 
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: t('Categories') }} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ title: t('MealsOverview') }} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: t('MealDetail') }} />
    </Stack.Navigator>
  );
}


function TabNavigator() {
  const { t } = useTranslation(); 
  const { isDarkMode } = useTheme(); 

  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'MealsTab') {
            iconName = 'food'; 
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'FavoritesTab') {
            iconName = 'heart'; 
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        headerStyle: {
          backgroundColor: isDarkMode ? '#222' : '#3ade5d', 
        },
        headerTintColor: isDarkMode ? '#00e676' : '#000', 
        tabBarActiveTintColor: '#3ade5d',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#222' : '#f8f8f8', 
        },
      })}
    >
      <BottomTabs.Screen name="MealsTab" component={MealsStackNavigator} options={{ title: t('MealsTab') }} />
      <BottomTabs.Screen name="FavoritesTab" component={FavoritesScreen} options={{ title: t('FavoritesTab') }} />
    </BottomTabs.Navigator>
  );
}

export default function MealsNavigator() {
  const { t } = useTranslation(); 
  const { isDarkMode } = useTheme(); 

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#222' : '#3ade5d',
        },
        headerTintColor: isDarkMode ? '#00e676' : '#000', 
        drawerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#fff', 
        },
        drawerActiveTintColor: isDarkMode ? '#00e676' : '#00796b', 
        drawerInactiveTintColor: isDarkMode ? '#00e676' : '#004d40', 
      }}
    >
      <Drawer.Screen name="MealsDrawer" component={TabNavigator} options={{ title: t('MealsDrawer') }} />
      <Drawer.Screen name="SettingsDrawer" component={SettingsScreen} options={{ title: t('SettingsDrawer') }} />
    </Drawer.Navigator>
  );
}
