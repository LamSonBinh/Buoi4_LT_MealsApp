// data/dummy-data.js

export const CATEGORIES = [
    { id: '1', title: 'Đồ ăn no', image: require('../assets/categories/category1.png') },
    { id: '2', title: 'Nước', image: require('../assets/categories/category2.png') },
    { id: '3', title: 'Topping', image: require('../assets/categories/category3.png') },
    { id: '4', title: 'Ăn vặt', image: require('../assets/categories/category4.png') },
  ];
  
  export const MEALS = [
    //Đồ ăn no 1
    { id: '1', categoryId: '1', title: 'Hamburger bò', image: require('../assets/meals/anno1.png') },
    { id: '2', categoryId: '1', title: 'Mì trộn hải sản', image: require('../assets/meals/anno2.png') },
    
    //Nước 2
    { id: '4', categoryId: '2', title: 'Trân châu kem', image: require('../assets/meals/nuoc1.png') },
    { id: '5', categoryId: '2', title: 'Sữa chua socola', image: require('../assets/meals/nuoc2.png') },
    { id: '6', categoryId: '2', title: 'Trà sữa truyền thống', image: require('../assets/meals/nuoc3.png') },

    //Toping 3
    { id: '7', categoryId: '3', title: 'Bánh flan', image: require('../assets/meals/topping1.png') },
    { id: '8', categoryId: '3', title: 'Trân châu đen', image: require('../assets/meals/topping2.png') },
    
    //Ăn vặt 4
    { id: '10', categoryId: '4', title: 'Xúc xích chiên', image: require('../assets/meals/anvat1.png') },
    { id: '11', categoryId: '4', title: 'Khoai tây chiên', image: require('../assets/meals/anvat2.png') },
  ];
  