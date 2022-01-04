import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: [],
};

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    changeSelectedRows: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changeSelectedRows } = rowsSlice.actions;

export const selectRows = (state) => state.rows;

export default rowsSlice.reducer;
