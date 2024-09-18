import 'intl-pluralrules'; // Thêm dòng này vào đầu file chính của ứng dụng
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Categories: 'Categories',
      MealsOverview: 'Meal List',
      MealDetail: 'Meal Details',
      FavoritesTab: 'Favorites',
      MealsTab: 'Meals',
      SettingsDrawer: 'Settings',
      MealsDrawer: 'Binh Foods',
    },
  },
  vi: {
    translation: {
      Categories: 'Danh Mục',
      MealsOverview: 'Danh Sách Món Ăn',
      MealDetail: 'Chi Tiết Món Ăn',
      FavoritesTab: 'Yêu Thích',
      MealsTab: 'Món Ăn',
      SettingsDrawer: 'Cài Đặt',
      MealsDrawer: 'Bình Foods',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi', // Ngôn ngữ mặc định
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // Không cần escape giá trị
  },
});

export default i18n;
