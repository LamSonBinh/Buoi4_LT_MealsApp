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
    youtubeLink: 'https://youtu.be/3KQs3EqQ9SA?si=7esMmtLj_CHZ3PeC', 
  },
  {
    id: '2',
    categoryId: '1',
    title: { en: 'Seafood Noodles', vi: 'Mì trộn hải sản' },
    image: require('../assets/meals/anno2.png'),
    description: { en: 'Noodles mixed with fresh seafood and vegetables.', vi: 'Mì trộn với hải sản tươi ngon và rau củ.' },
    youtubeLink: 'https://youtu.be/AKSlrOf_-Ws?si=iluq3jS0EPpLWYsh', 
  },
  {
    id: '3',
    categoryId: '1',
    title: { en: 'Sausage Cheese Pizza', vi: 'Pizza xúc xích phô mai' },
    image: require('../assets/meals/anno3.png'),
    description: { en: 'Cheesy pizza topped with savory sausage.', vi: 'Pizza phủ xúc xích mặn và phô mai thơm.' }, 
    youtubeLink: 'https://youtu.be/MDX8fylSisU?si=fMpjPqb0xDwhN40r', 
  },

  // Drinks 2
  {
    id: '4',
    categoryId: '2',
    title: { en: 'Creamy Bubble Tea', vi: 'Trà sữa chocolate kem' },
    image: require('../assets/meals/nuoc1.png'),
    description: { en: 'Creamy bubble tea with a rich, smooth texture.', vi: 'Nước trân châu kem béo ngậy và thơm ngon.' },
    youtubeLink: 'https://youtu.be/5N8DWgy8iiI?si=CG2_x7FbgpTPykI_', 
  },
  {
    id: '5',
    categoryId: '2',
    title: { en: 'Chocolate Yogurt', vi: 'Sữa chua chocolate' },
    image: require('../assets/meals/nuoc2.png'),
    description: { en: 'Yogurt combined with sweet chocolate.', vi: 'Sữa chua kết hợp với socola ngọt ngào.' },
    youtubeLink: 'https://youtu.be/5N8DWgy8iiI?si=CG2_x7FbgpTPykI_', 
  },
  {
    id: '6',
    categoryId: '2',
    title: { en: 'Traditional Milk Tea', vi: 'Trà sữa truyền thống' },
    image: require('../assets/meals/nuoc3.png'),
    description: { en: 'Traditional milk tea with chewy tapioca pearls.', vi: 'Trà sữa truyền thống với trân châu dai.' },
    youtubeLink: 'https://youtu.be/gYUS20HDzQc?si=w1MY7rJMWJ79L0GN', 
  },
  {
    id: '7',
    categoryId: '2',
    title: { en: 'Orange Juice', vi: 'Nước ép cam' }, 
    image: require('../assets/meals/nuoc4.png'),
    description: { en: 'Freshly squeezed orange juice.', vi: 'Nước ép cam tươi ngon.' }, 
    youtubeLink: 'https://youtu.be/p6kavAubLxs?si=Q9Z9UDHrG1qLGI18', 
  },
  {
    id: '8',
    categoryId: '2',
    title: { en: 'Strawberry Juice', vi: 'Nước ép dâu' }, 
    image: require('../assets/meals/nuoc5.png'),
    description: { en: 'Fresh and sweet strawberry juice.', vi: 'Nước ép dâu tươi và ngọt.' }, 
    youtubeLink: 'https://youtu.be/MSxxqspbgLc?si=Zz3-BfwvQ8UWXqav', 
  },

  // Toppings 3
  {
    id: '9',
    categoryId: '3',
    title: { en: 'Flan Cake', vi: 'Bánh flan' },
    image: require('../assets/meals/topping1.png'),
    description: { en: 'Smooth, creamy flan cake.', vi: 'Bánh flan mềm mịn, béo ngậy.' },
    youtubeLink: 'https://youtu.be/7BH3AOCe_EA?si=5zQq3rpnuCUndm3n', 
  },
  {
    id: '10',
    categoryId: '3',
    title: { en: 'Black Tapioca Pearls', vi: 'Trân châu đen' },
    image: require('../assets/meals/topping2.png'),
    description: { en: 'Chewy black tapioca pearls.', vi: 'Trân châu đen dẻo và dai.' },
    youtubeLink: 'https://youtu.be/YzLstbjBs5o?si=H9SSBS-MjlVtMhyB', 
  },

  // Snacks 4
  {
    id: '11',
    categoryId: '4',
    title: { en: 'Fried Sausages', vi: 'Xúc xích chiên' },
    image: require('../assets/meals/anvat1.png'),
    description: { en: 'Crispy fried sausages with sauce.', vi: 'Xúc xích chiên giòn với sốt.' },
    youtubeLink: 'https://youtu.be/Np49mLRa-1I?si=h7Z4i_nnuP7zqTJ5', 
  },
  {
    id: '12',
    categoryId: '4',
    title: { en: 'French Fries', vi: 'Khoai tây chiên' },
    image: require('../assets/meals/anvat2.png'),
    description: { en: 'Crispy and delicious french fries.', vi: 'Khoai tây chiên giòn thơm ngon.' },
    youtubeLink: 'https://youtu.be/ZIPSM3D-Q5Q?si=GQYk3eNFbPNCL9Wx', 
  },
  {
    id: '13',
    categoryId: '4',
    title: { en: 'Mixed Rice Paper', vi: 'Bánh tráng trộn' }, 
    image: require('../assets/meals/anvat3.png'),
    description: { en: 'Savory and spicy mixed rice paper with toppings.', vi: 'Bánh tráng trộn cay mặn cùng với các loại topping.' }, 
    youtubeLink: 'https://youtu.be/4IjRNTtAJas?si=NSLEpSvRn_QBXUHM', 
  },
];
