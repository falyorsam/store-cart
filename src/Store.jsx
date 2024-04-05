import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./fr/cart/cartSlice";
export const store = configureStore({
  reducer: { cart: cartReducer },
});
