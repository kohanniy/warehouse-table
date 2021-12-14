import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getData = async (colName) => {
  try {
    let data = [];
    const querySnapshot = await getDocs(collection(db, colName));
    querySnapshot.forEach((doc) => {
      const col = doc.data();

      const formatCol = {
        id: doc.id,
        name: col.name,
        package: col.package,
        quantityDoc: col.quantityDoc,
        quantityActual: col.quantityActual,
        arrivalDate: col.arrivalDate,
        orionBW: col.orionBW,
        logistics: col.logistics,
        petrochemBW: col.petrochemBW,
        tashkent: col.tashkent,
        bukhara: col.bukhara,
        recipient: col.recipient,
        buyer: col.buyer,
        purchaseQuantity: col.purchaseQuantity,
        balance: col.balance,
      };

      data.push(formatCol);
    });
    
    return data;
  } catch (err) {
    throw new Error(
      `При загрузке данных возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};

export const addProduct = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), data);
    return docRef;
  } catch (err) {
    console.log(err);
    // throw new Error(
    //   `При добавлении товара возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    // );
  }
  
};
