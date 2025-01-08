import { createSlice } from "@reduxjs/toolkit";
import steam from "../../assets/images/Cart/steam.png";
import roblox from "../../assets/images/Cart/roblox.png";

const initialState = {
  shoppingCartData: [
    {
      id: 1,
      heading: "Roblox Gift Card 10€ (Email Delivery) ",
      cartImg: steam,
      quantity: 2,
      price: 10,
    },
    {
      id: 2,
      heading: "Roblox Gift Card 10€ (Email Delivery) ",
      cartImg: roblox,
      quantity: 2,
      price: 10,
    },
    {
      id: 3,
      heading: "Roblox Gift Card 10€ (Email Delivery) ",
      cartImg: steam,
      quantity: 2,
      price: 10,
    },
    {
      id: 4,
      heading: "Roblox Gift Card 10€ (Email Delivery) ",
      cartImg: roblox,
      quantity: 2,
      price: 10,
    },
  ],
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
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.shoppingCartData.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
