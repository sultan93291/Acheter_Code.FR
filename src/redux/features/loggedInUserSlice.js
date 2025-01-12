import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUserData: {},
};

export const loggedInUserSlice = createSlice({
  name: "loggedInUserSlice",
  initialState,
  reducers: {
    setLoggedInUserData: (state, action) => {
      state.loggedInUserData = action.payload;
    },
  },
});

export const { setLoggedInUserData } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
