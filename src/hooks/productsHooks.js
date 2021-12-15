import { useMutation, useQuery } from 'react-query';
import { addProduct, getProducts } from '../firebase';

export const useGetProducts = () => useQuery('getProducts', getProducts);

export const useAddProduct = (options = null) => useMutation(addProduct, { mutationKey: 'addProduct', ...options })
