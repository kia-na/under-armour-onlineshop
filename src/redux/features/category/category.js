import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../../API/URL";
export const getAsyncCategory = createAsyncThunk(
  "category/getAsyncCategory",
  async (payload, { rejectWithValue }) => {
    if (payload.limit) {
      const { data } = await axios.get(
        `${PRODUCTS_API}?page=${payload.currentPage}&limit=${payload.limit}`
      );
      // console.log(data, "reduxxx");
      return data;
    } else if (payload.id) {
      const { data } = await axios.get(`${PRODUCTS_API}/${payload.id}`);
      return data;
    } else if (!payload.limit) {
      const { data } = await axios.get(PRODUCTS_API);
      return data;
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const productSlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncCategory.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = "";
        // console.log(action, "fullfield");
      })
      .addCase(getAsyncCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.error = "";
      })
      .addCase(getAsyncCategory.rejected, (state, action) => {
        state.error = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.data = [];
      });
  },
});

export default productSlice.reducer;
