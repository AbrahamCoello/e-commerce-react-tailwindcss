import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  filteredList: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetProductsRedux() {
      return initialState;
    },
  },
});

export const { setProductsRedux, unsetProductsRedux } = productsSlice.actions;
export default productsSlice.reducer;
