import { useMutation, useQuery } from 'react-query';
import { addProduct, deleteProduct, getProducts } from '../firebase';

export const useGetProducts = () => useQuery('getProducts', getProducts);

export const useAddProduct = (options = null) =>
  useMutation(addProduct, { mutationKey: 'addProduct', ...options });

export const useDeleteProduct = (options = null) =>
  useMutation(deleteProduct, { mutationKey: 'deleteProduct', ...options });
