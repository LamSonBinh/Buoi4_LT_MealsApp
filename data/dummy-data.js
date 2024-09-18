// data/dummy-data.js

export const CATEGORIES = [
  {
    id: '1',
    title: { en: 'Hearty Meals', vi: 'Đồ ăn no' },
    image: require('../assets/categories/category1.png'),
  },
  {
    id: '2',
    title: { en: 'Drinks', vi: 'Nước' },
    image: require('../assets/categories/category2.png'),
  },
  {
    id: '3',
    title: { en: 'Toppings', vi: 'Topping' },
    image: require('../assets/categories/category3.png'),
  },
  {
    id: '4',
    title: { en: 'Snacks', vi: 'Ăn vặt' },
    image: require('../assets/categories/category4.png'),
  },
];

export const MEALS = [
  // Hearty Meals 1
  {
    id: '1',
    categoryId: '1',
    title: { en: 'Beef Burger', vi: 'Hamburger bò' },
    image: require('../assets/meals/anno1.png'),
    description: { en: 'Beef burger with cheese, fresh vegetables, and special sauce.', vi: 'Hamburger bò với phô mai, rau sống, và sốt đặc biệt.' },
  },
  {
    id: '2',
    categoryId: '1',
    title: { en: 'Seafood Noodles', vi: 'Mì trộn hải sản' },
    image: require('../assets/meals/anno2.png'),
    description: { en: 'Noodles mixed with fresh seafood and vegetables.', vi: 'Mì trộn với hải sản tươi ngon và rau củ.' },
  },

  // Drinks 2
  {
    id: '4',
    categoryId: '2',
    title: { en: 'Creamy Bubble Tea', vi: 'Trân châu kem' },
    image: require('../assets/meals/nuoc1.png'),
    description: { en: 'Creamy bubble tea with a rich, smooth texture.', vi: 'Nước trân châu kem béo ngậy và thơm ngon.' },
  },
  {
    id: '5',
    categoryId: '2',
    title: { en: 'Chocolate Yogurt', vi: 'Sữa chua socola' },
    image: require('../assets/meals/nuoc2.png'),
    description: { en: 'Yogurt combined with sweet chocolate.', vi: 'Sữa chua kết hợp với socola ngọt ngào.' },
  },
  {
    id: '6',
    categoryId: '2',
    title: { en: 'Traditional Milk Tea', vi: 'Trà sữa truyền thống' },
    image: require('../assets/meals/nuoc3.png'),
    description: { en: 'Traditional milk tea with chewy tapioca pearls.', vi: 'Trà sữa truyền thống với trân châu dai.' },
  },

  // Toppings 3
  {
    id: '7',
    categoryId: '3',
    title: { en: 'Flan Cake', vi: 'Bánh flan' },
    image: require('../assets/meals/topping1.png'),
    description: { en: 'Smooth, creamy flan cake.', vi: 'Bánh flan mềm mịn, béo ngậy.' },
  },
  {
    id: '8',
    categoryId: '3',
    title: { en: 'Black Tapioca Pearls', vi: 'Trân châu đen' },
    image: require('../assets/meals/topping2.png'),
    description: { en: 'Chewy black tapioca pearls.', vi: 'Trân châu đen dẻo và dai.' },
  },

  // Snacks 4
  {
    id: '10',
    categoryId: '4',
    title: { en: 'Fried Sausages', vi: 'Xúc xích chiên' },
    image: require('../assets/meals/anvat1.png'),
    description: { en: 'Crispy fried sausages with sauce.', vi: 'Xúc xích chiên giòn với sốt.' },
  },
  {
    id: '11',
    categoryId: '4',
    title: { en: 'French Fries', vi: 'Khoai tây chiên' },
    image: require('../assets/meals/anvat2.png'),
    description: { en: 'Crispy and delicious french fries.', vi: 'Khoai tây chiên giòn thơm ngon.' },
  },
];
