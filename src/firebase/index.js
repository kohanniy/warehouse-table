import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  // onSnapshot,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

import { sortProductData } from '../utils/constants';

export const productsRef = collection(db, 'products');

export const getProducts = async () => {
  const q = query(productsRef, orderBy('timestamp', 'desc'));

  let products = [];

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const product = sortProductData(doc);

      products.push(product);
    });

    return products;
  } catch (err) {
    throw new Error(
      `При загрузке данных возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};

export const addProduct = async (data) => {
  data.timestamp = serverTimestamp();
  try {
    const docRef = await addDoc(productsRef, data);

    return docRef;
  } catch (err) {
    throw new Error(
      `При добавлении товара возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};

// const q = query(collection(db, 'cities'), where('state', '==', 'CA'));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//     cities.push(doc.data().name);
//   });
//   console.log('Current cities in CA: ', cities.join(', '));
// });

// export const addListenerForColProducts = onSnapshot(productsRef,
//   (snapshot) => {
//     // ...
//   },
//   (error) => {
//     // ...
//   });
