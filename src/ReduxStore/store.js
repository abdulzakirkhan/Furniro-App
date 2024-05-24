import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./cartSlice";
export const store = configureStore({
  reducer:{
    cart:addReducer,
  }
});
