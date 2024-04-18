import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenCheckout: false,
};

const checkoutSideMenuSlice = createSlice({
  name: 'checkoutSideMenu',
  initialState,
  reducers: {
    setCheckoutSideMenuRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetCheckoutSideMenuRedux() {
      return initialState;
    },
  },
});

export const { setCheckoutSideMenuRedux, unsetCheckoutSideMenuRedux } =
  checkoutSideMenuSlice.actions;
export default checkoutSideMenuSlice.reducer;
