import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filterCardData: [],
  activeFilterCardName:'STEAM'
};

export const filterCardSlice = createSlice({
  name: "filterCardSlice",
  initialState,
  reducers: {
    setFilterCardData: (state, action) => {
      state.filterCardData = action.payload;
    },
    setActiveFilterCardName: (state, action) => {
      state.activeFilterCardName = action.payload;
    },
  },
});

export const { setFilterCardData , setActiveFilterCardName } = filterCardSlice.actions;
export default filterCardSlice.reducer;
