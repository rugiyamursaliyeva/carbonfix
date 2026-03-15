// frontend/src/redux/reducers/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://carbonfix.az";

const initialState = {
  products: [],           // ← mütləq array olmalıdır
  loading: false,
  error: null,
};

export const getProductThunk = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/product`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Şəkillər yüklənmədi");
    }
  }
);

export const postProductThunk = createAsyncThunk(
  "product/postProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.post(`${BASE_URL}/product`, formData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Əlavə edilə bilmədi");
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  "product/updateProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.put(`${BASE_URL}/product/${id}`, formData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Yenilənə bilmədi");
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${BASE_URL}/product/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Silinmədi");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(postProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.products = [...state.products, action.payload];
        }
      })
      .addCase(postProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      })
      .addCase(updateProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== action.payload);
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;