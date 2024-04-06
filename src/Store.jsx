import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./fr/cart/cartSlice";
import modalReducer from "./fr/modal/ModalSlice";
export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});
