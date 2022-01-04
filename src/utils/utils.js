export const generateProductData = (doc) => ({
  id: doc.id,
  ...doc.data(),
});