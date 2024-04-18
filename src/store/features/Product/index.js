import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
  isOpenDetails: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetProductRedux() {
      return initialState;
    },
  },
});

export const { setProductRedux, unsetProductRedux } = productSlice.actions;
export default productSlice.reducer;
