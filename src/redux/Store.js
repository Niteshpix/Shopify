import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import cartReducer from "./Slices/cartSlice";
import ProductSlice from "./Slices/ProductSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductSlice,
    auth: authSlice,
  
  }
});
