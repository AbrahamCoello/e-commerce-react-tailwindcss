import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  byTitle: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchRedux(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    unsetSearchRedux() {
      return initialState;
    },
  },
});

export const { setSearchRedux, unsetSearchRedux } = searchSlice.actions;
export default searchSlice.reducer;
