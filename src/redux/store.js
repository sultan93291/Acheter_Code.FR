import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/CartSlice";
import loggedInUserSliceReducer from "./features/loggedInUserSlice";
import filterCardDataReducer from "./features/filterCardSlice";

export default configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
    loggedInUserSlice: loggedInUserSliceReducer,
    filterCardDataSlice: filterCardDataReducer,
  },
});
