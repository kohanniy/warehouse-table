import { useQuery } from 'react-query';
import { getData } from '../firebase';

export const useProductsQuery = () =>
  useQuery('products', ({ queryKey }) => getData(queryKey[0]));
