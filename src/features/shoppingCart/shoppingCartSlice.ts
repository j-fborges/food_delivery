import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../restaurants/restaurant";

interface ShoppingCartState {
  isOpen: boolean;
  items: Dish[];
  cartTotal: number;
}

const initialState: ShoppingCartState = {
  isOpen: false,
  items: [],
  cartTotal: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addItem: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload);
      state.cartTotal += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<Dish>) => {
      const idToRemove = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      
      state.items = state.items.filter((item, key) => key != idToRemove);
      state.cartTotal -= action.payload.price;
    },
  },
});

export default shoppingCartSlice.reducer;
export const { addItem, closeCart, openCart, removeItem } =
  shoppingCartSlice.actions;
