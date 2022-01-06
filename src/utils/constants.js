// ^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$

const validationRules = {
  required: 'Поле обязательно для заполнения',
  patterns: {
    number: {
      value: /^\d+$/,
      message: 'Поле принимает только числа',
    },
    date: {
      value: /^(\d{2}.){2}\d{4}$/,
      message: 'Верный формат даты: "dd.mm.yyyy"',
    },
  },
};

export const inputsData = [
  {
    name: 'name',
    label: 'Наименование товара',
    rules: {
      required: validationRules.required,
    },
  },
  {
    name: 'package',
    label: 'Вид упаковки',
    rules: {
      required: validationRules.required,
    },
  },
  {
    name: 'quantityDoc',
    label: 'Количество товара по документам',
    rules: {
      required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'quantityActual',
    label: 'Фактическое количество товара',
    rules: {
      required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'arrivalDate',
    label: 'Дата прихода',
    rules: {
      required: validationRules.required,
      pattern: validationRules.patterns.date,
    },
  },
  {
    name: 'orionBW',
    label: 'Орион - таможенный склад',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'logistics',
    label: 'Логистика',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'petrochemBW',
    label: 'Petrochem - таможенный склад',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'tashkent',
    label: 'Ташкент',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'bukhara',
    label: 'Бухара',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
  },
  {
    name: 'recipient',
    label: 'Получатель',
    rules: {
      // required: validationRules.required,
    },
  },
  {
    name: 'buyer',
    label: 'Покупатель',
    rules: {
      // required: validationRules.required,
    },
  },
  {
    name: 'purchaseQuantity',
    label: 'Купил',
    rules: {
      // required: validationRules.required,
      pattern: validationRules.patterns.number,
    },
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
