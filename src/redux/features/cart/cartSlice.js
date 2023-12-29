import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sumOfPrice: 0,
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.sumOfPrice += +action.payload.price * +action.payload.quantity;
      const p = state.carts.findIndex(
        (product) => product.productId === action.payload.productId
      );

      p !== -1
        ? (state.carts[p].quantity += Number(action.payload.quantity))
        : state.carts.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.carts = state.carts.filter(
        (product) => product.productId !== action.payload.productId
      );
      state.sumOfPrice = state.carts.reduce(
        (sum, p) => sum + +p.price * +p.quantity,
        0
      );
    },
    editCart: (state, action) => {
      // quantity
      const index = state.carts.findIndex(
        (p) => p.productId === action.payload.productId
      );
      state.carts[index].quantity = +action.payload.quantity;

      state.sumOfPrice = state.carts.reduce(
        (sum, p) => sum + +p.price * +p.quantity,
        0
      );
    },
  },
});

//main reducer
export default cartSlice.reducer;

//action creator
export const { addToCart, deleteFromCart, editCart } = cartSlice.actions;
