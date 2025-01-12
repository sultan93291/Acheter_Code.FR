import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filterCardData:[]
};

export const filterCardSlice = createSlice({
  name: "filterCardSlice",
  initialState,
  reducers: {
    setFilterCardData: (state, action) => {
      state.filterCardData = action.payload;
    },
  },
});

export const { setFilterCardData } = filterCardSlice.actions;
export default filterCardSlice.reducer;
