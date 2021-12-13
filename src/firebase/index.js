import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getData = async (colName) => {
  try {
    let data = [];
    const querySnapshot = await getDocs(collection(db, colName));
    querySnapshot.forEach((doc, index) => {
      const col = doc.data();
      col.id = doc.id;

      data.push(col);
    });
    
    return data;
  } catch (err) {
    throw new Error(
      `При загрузке данных возникла ошибка: ${err}. Обновите страницу или обратитесь к разработчику`
    );
  }
};
