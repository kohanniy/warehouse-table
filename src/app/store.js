import { configureStore } from '@reduxjs/toolkit';
import rowsReducer from './slices/rowsSlice';

export const store = configureStore({
  reducer: {
    rows: rowsReducer,
  },
});
