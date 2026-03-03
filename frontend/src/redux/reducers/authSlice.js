// frontend/src/redux/reducers/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("adminToken") || null,
  isAuthenticated: !!localStorage.getItem("adminToken"),
  loading: false,
  error: null,
};

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        username,
        password,
      });
      const { token } = res.data;
      localStorage.setItem("adminToken", token);
      return { token };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Giriş uğursuz");
    }
  }
);

export const logoutAdmin = createAsyncThunk("auth/logoutAdmin", async () => {
  localStorage.removeItem("adminToken");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAdminFromToken(state) {
      const token = localStorage.getItem("adminToken");
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { loadAdminFromToken } = authSlice.actions;
export default authSlice.reducer;