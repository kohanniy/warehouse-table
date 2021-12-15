const numberPattern = {
  value: /[1-9]/,
  message: 'Поле принимает только числа',
};

export const inputsData = [
  {
    name: 'name',
    label: 'Наименование товара',
  },
  {
    name: 'package',
    label: 'Вид упаковки',
  },
  {
    name: 'quantityDoc',
    label: 'Количество товара по документам',
    pattern: numberPattern,
  },
  {
    name: 'quantityActual',
    label: 'Фактическое количество товара',
    pattern: numberPattern,
  },
  {
    name: 'arrivalDate',
    label: 'Дата прихода',
  },
  {
    name: 'orionBW',
    label: 'Таможенный склад Орион',
    pattern: numberPattern,
  },
  {
    name: 'logistics',
    label: 'Логистика',
    pattern: numberPattern,
  },
  {
    name: 'petrochemBW',
    label: 'Таможенный склад Petrochem',
    pattern: numberPattern,
  },
  {
    name: 'tashkent',
    label: 'Ташкент',
    pattern: numberPattern,
  },
  {
    name: 'bukhara',
    label: 'Бухара',
    pattern: numberPattern,
  },
  {
    name: 'recipient',
    label: 'Получатель',
  },
  {
    name: 'buyer',
    label: 'Покупатель',
  },
  {
    name: 'purchaseQuantity',
    label: 'Купил',
    pattern: numberPattern,
  },
];

export const columns = [
  {
    id: 'name',
    label: 'Наименование',
  },
  {
    id: 'package',
    label: 'Упаковка',
  },
  {
    id: 'quantityDoc',
    label: 'По документам (кг)',
  },
  {
    id: 'quantityActual',
    label: 'Фактически (кг)',
  },
  {
    id: 'arrivalDate',
    label: 'Дата прихода',
  },
  {
    id: 'orionBW',
    label: 'Орион (кг)',
  },
  {
    id: 'logistics',
    label: 'Логистика (кг)',
  },
  {
    id: 'petrochemBW',
    label: 'Petrochem (кг)',
  },
  {
    id: 'tashkent',
    label: 'Ташкент (кг)',
  },
  {
    id: 'bukhara',
    label: 'Бухара (кг)',
  },
  {
    id: 'recipient',
    label: 'Получатель',
  },
  {
    id: 'buyer',
    label: 'Покупатель',
  },
  {
    id: 'purchaseQuantity',
    label: 'Купил (кг)',
  },
  {
    id: 'balance',
    label: 'Остаток (кг)',
  },
];

export const sortProductData = (doc) => ({
  id: doc.id,
  name: doc.data().name,
  package: doc.data().package,
  quantityDoc: doc.data().quantityDoc,
  quantityActual: doc.data().quantityActual,
  arrivalDate: doc.data().arrivalDate,
  orionBW: doc.data().orionBW,
  logistics: doc.data().logistics,
  petrochemBW: doc.data().petrochemBW,
  tashkent: doc.data().tashkent,
  bukhara: doc.data().bukhara,
  recipient: doc.data().recipient,
  buyer: doc.data().buyer,
  purchaseQuantity: doc.data().purchaseQuantity,
  balance: doc.data().balance,
});