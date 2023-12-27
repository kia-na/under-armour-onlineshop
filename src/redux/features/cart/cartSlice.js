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
      state.sumOfPrice += action.payload.price;
      state.carts.push(action.payload);
    },
  },
});

//main reducer
export default cartSlice.reducer;

//action creator
export const { buyCake } = cartSlice.actions;
