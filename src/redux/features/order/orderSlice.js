import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ORDERS_API } from "../../../API/URL";
export const getAsyncOrders = createAsyncThunk(
  "order/getAsyncOrders",
  async (payload, { rejectWithValue }) => {
    try {
      if (payload.id) {
        const { data } = await axios.get(`${ORDERS_API}/${payload.id}`);
        return data;
      } else if (payload.delivered) {
        const { data } = await axios.get(
          `${ORDERS_API}/?deliveryStatus=${payload.delivered}&page=${payload.currentPage}&limit=5`
        );
        return data;
      } else if (payload.currentPage) {
        const { data } = await axios.get(
          `${ORDERS_API}/?page=${payload.currentPage}&limit=5`
        );
        return data;
      } else {
        const { data } = await axios.get(ORDERS_API);
        return data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const editAsyncOrder = createAsyncThunk(
  "order/editAsyncOrder",
  async (payload) => {
    axios
      .patch(`${ORDERS_API}/${payload.id}`, {
        deliveryStatus: true,
      })
      .then((res) => console.log(res.status, "EDITED"))
      .catch((err) => console.log(err.message));
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const ordertSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncOrders.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = "";
        // console.log(action, "fullfield");
      })
      .addCase(getAsyncOrders.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.error = "";
      })
      .addCase(getAsyncOrders.rejected, (state, action) => {
        state.error = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.data = [];
      })
      .addCase(editAsyncOrder.fulfilled, (state, action) => {
        // state.data = action.payload;
        state.loading = false;
        state.error = "";
      });
  },
});

export default ordertSlice.reducer;
