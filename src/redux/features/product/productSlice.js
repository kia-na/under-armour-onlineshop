import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../../API/URL";
export const getAsyncProducts = createAsyncThunk(
  "product/getAsyncProducts",
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
export const addAsyncProduct = createAsyncThunk(
  "product/addAsyncProduct",
  async (payload) => {
    axios({
      url: PRODUCTS_API,
      method: "POST",
      data: payload.data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => console.log(res.status, "ADDED"))
      .catch((err) => console.log(err.message));
  }
);
export const deleteAsyncProduct = createAsyncThunk(
  "product/deleteAsyncProduct",
  async (payload) => {
    axios
      .delete(`${PRODUCTS_API}/${payload.id}`)
      .then((res) => console.log(res.status, "DELETED"))
      .catch((err) => console.log(err));
  }
);

const initialState = {
  loading: false,
  data: [],
  addProduct: [],
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProducts.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = "";
        // console.log(action, "fullfield");
      })
      .addCase(getAsyncProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.error = "";
      })
      .addCase(getAsyncProducts.rejected, (state, action) => {
        state.error = action.payload;
        // console.log(action, "fullfield");
        state.loading = false;
        state.data = [];
      })
      .addCase(addAsyncProduct.fulfilled, (state, action) => {
        state.addProduct = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(addAsyncProduct.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
