import { createSlice } from "@reduxjs/toolkit";
import steam from "../../assets/images/Cart/steam.png";
import roblox from "../../assets/images/Cart/roblox.png";

const initialState = {
  shoppingCartData: (() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.error(
        "Failed to parse shoppingCartData from localStorage:",
        error
      );
      return [];
    }
  })(),
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.shoppingCartData.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    setCardData: (state, action) => {
      const { Data } = action.payload;
      if (Array.isArray(Data)) {
        state.shoppingCartData = Data;
        localStorage.setItem("cart", JSON.stringify(Data));
      } else {
        console.error("Invalid data format for shoppingCartData:", Data);
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.shoppingCartData.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    emptyCart: state => {
      state.shoppingCartData = [];
      localStorage.setItem("cart", JSON.stringify([])); // Clear cart in localStorage
    },
  },
});

export const { increaseQuantity, decreaseQuantity, setCardData ,emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
