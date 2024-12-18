// const productsData = [
//     { id: 1, image: '/img/sweets/Atta-Ka-Sheera.jpg', title: 'Atta Ka Sheera', price: 15.99, oldPrice: 20.99, category: 'sweets' },
//     { id: 2, image: '/img/veg/onion.webp', title: 'Onion', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 3, image: '/img/veg/tomato.webp', title: 'Tomato', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 4, image: '/img/veg/potato.webp', title: 'Potato', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 5, image: '/img/veg/ladies finger.webp', title: 'ladies finger', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 6, image: '/img/veg/brinjal.webp', title: 'Brinjal', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 7, image: '/img/veg/capsicum.webp', title: 'Capsicum', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 8, image: '/img/veg/corn.webp', title: 'Corn', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 9, image: '/img/veg/itter gourd.webp', title: 'Bitter Gourd', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 10, image: '/img/veg/ridge gours.webp', title: 'Ridge Gourd', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     // { id: 2, image: '/img/veg/onion.webp', title: 'Onion', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
//     { id: 11, image: '/img/fruits/banana.webp', title: 'Banana', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 12, image: '/img/fruits/Anjeer.webp', title: 'Anjeer', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 13, image: '/img/fruits/Apple.webp', title: 'Apple', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 14, image: '/img/fruits/kiwi.webp', title: 'kiwi', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 15, image: '/img/fruits/musk melon.webp', title: 'musk melon', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 16, image: '/img/fruits/orange.webp', title: 'orange', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 17, image: '/img/fruits/pappaya.webp', title: 'pappaya', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 18, image: '/img/fruits/pineapple.webp', title: 'pineapple', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 19, image: '/img/fruits/pomegranate.webp', title: 'pomegranate', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 20, image: '/img/fruits/Strawberry.webp', title: 'Strawberry', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 21, image: '/img/fruits/watermelon.webp', title: 'watermelon', price: 5.99, oldPrice: 7.99, category: 'fruits' },
//     { id: 23, image: '/img/nuts/cashew.webp', title: 'Cashew', price: 20.99, oldPrice: 25.99, category: 'nuts' },
//     { id: 24, image: '/img/nuts/almond.webp', title: 'almond', price: 20.99, oldPrice: 25.99, category: 'nuts' },
//     { id: 25, image: '/img/nuts/dates.webp', title: 'dates', price: 20.99, oldPrice: 25.99, category: 'nuts' },
//     { id: 26, image: '/img/nuts/pista.webp', title: 'pista', price: 20.99, oldPrice: 25.99, category: 'nuts' },
//     { id: 27, image: '/img/nuts/walnut.webp', title: 'walnut', price: 20.99, oldPrice: 25.99, category: 'nuts' },
 
//     { id: 28, image: '/img/sweets/kaju-jalebi.webp', title: 'Kaju Jalebi', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     { id: 29, image: '/img/sweets/dry pean.jpg', title: 'Dry pean', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     { id: 30, image: '/img/sweets/laddu.jpg', title: 'Laddu', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     { id: 31, image: '/img/sweets/palkova.jpg', title: 'palkova', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     { id: 32, image: '/img/sweets/soan appudi.jpg', title: 'Soan pappudi', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     { id: 33, image: '/img/sweets/globe.jpg', title: 'Gulab jamun', price: 18.99, oldPrice: 22.99, category: 'sweets' },
//     // Add more products with respective categories
//   ];
  
//   export default productsData;
  











// src/assets/imageImports.js
export const categories = {
    All: require('../img/categories/All.png'),
    Vegetables: require('../img/categories/veg.jpg'),
    Fruits: require('../img/categories/fruit.jpg'),
    Sweets: require('../img/categories/sweets.jpg'),
    Cookies: require('../img/categories/cook.jpg'),
    Nuts: require('../img/categories/nuts.webp'),
  };
  
  export const products = {
    Sweets: [
      require('../img/sweets/Atta-Ka-Sheera.jpg'),
      require('../img/sweets/dry pean.jpg'),
      require('../img/sweets/globe.jpg'),
      // Add remaining sweet images
    ],
    Nuts: [
      require('../img/nuts/c1.webp'),
      require('../img/nuts/i2.webp'),
      // Add remaining nuts images
    ],
    Fruits: [
      require('../img/fruits/orange.webp'),
      require('../img/fruits/pineapple.webp'),
      // Add remaining fruit images
    ],
    Vegetables: [
      require('../img/veg/cauliflower.webp'),
      require('../img/veg/onion.webp'),
      // Add remaining vegetable images
    ],
  };
  