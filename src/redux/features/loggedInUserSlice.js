import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUserData: {},
  isCheckout: false,
};

export const loggedInUserSlice = createSlice({
  name: "loggedInUserSlice",
  initialState,
  reducers: {
    setLoggedInUserData: (state, action) => {
      state.loggedInUserData = action.payload;
    },
    setCheckout: state => {
      state.isCheckout = !state.isCheckout;
    },
  },
});

export const { setLoggedInUserData , setCheckout } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
