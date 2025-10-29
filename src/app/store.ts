import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    restaurants: restaurantsReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
