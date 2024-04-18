import { configureStore } from '@reduxjs/toolkit';
import {
  shoppingCartReducer,
  productReducer,
  checkoutSideMenuReducer,
  orderSliceReducer,
  productsSliceReducer,
  searchSliceReducer,
} from './features';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    product: productReducer,
    products: productsSliceReducer,
    checkoutSideMenu: checkoutSideMenuReducer,
    order: orderSliceReducer,
    search: searchSliceReducer,
  },
});

export { store };
