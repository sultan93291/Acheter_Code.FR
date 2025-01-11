import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/CartSlice";

export default configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
  },
});


