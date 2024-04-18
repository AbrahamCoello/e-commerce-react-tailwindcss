import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCartRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetShoppingCartRedux() {
      return initialState;
    },
  },
});

export const { setShoppingCartRedux, unsetShoppingCartRedux } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
