import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetOrderRedux() {
      return initialState;
    },
  },
});

export const { setOrderRedux, unsetOrderRedux } = orderSlice.actions;
export default orderSlice.reducer;
