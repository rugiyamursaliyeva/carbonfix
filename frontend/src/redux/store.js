import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/productSlice'
import authReducer from "./reducers/authSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        auth: authReducer,
    }
})