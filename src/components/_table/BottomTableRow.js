import { TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

const columns = [
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

const StyledCell = styled(TableCell)(( { theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  fontSize: '14px',
  outline: '1px solid #ffffff',
  paddingTop: '5px',
  paddingBottom: '5px',
  lineHeight: 1.5,
}));

function BottomTableRow() {
  return (
    <TableRow>
      {
        columns.map((column) => (
          <StyledCell align='center' key={column.id}>
            {column.label}
          </StyledCell>
        ))
      }
    </TableRow>
  )
}

export default BottomTableRow;
