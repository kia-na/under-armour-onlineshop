import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productsReducer from "./features/product/productSlice";
import ordersReducer from "./features/order/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export default store;
