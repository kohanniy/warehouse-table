import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { generateProductData } from '../utils/utils';
import { db } from './firebaseConfig';

export const productsRef = collection(db, 'products');
const q = query(productsRef, orderBy('timestamp', 'desc'));

export const getProducts = async () => {
  let products = [];

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const product = generateProductData(doc);
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

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, 'products', id));
  } catch (err) {
    throw new Error(
      `При удалении данных возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};

export const updateProduct = async ({ id, data }) => {
  try {
    await updateDoc(doc(db, 'products', id), data);
  } catch (err) {
    throw new Error(
      `При обновлении данных возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};

export const productsListener = (modifiedFn, removedFn) =>
  onSnapshot(
    productsRef,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'modified') {
          modifiedFn(change.doc);
          console.log('Modified city: ', change.doc.data());
        }
        if (change.type === 'removed') {
          removedFn(change.doc);
          console.log('Removed city: ', change.doc.data());
        }
      });
    },
    (err) => {
      throw new Error(`Возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`);
    }
  );
