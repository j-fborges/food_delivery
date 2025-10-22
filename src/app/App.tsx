import GlobalStyle from "./style";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import { Dish } from "../features/restaurants/restaurant";
import { useState } from "react";
import DishModal from "../components/DishModal";
import { Provider } from "react-redux";
import store from "./store";
import ShoppingCartModal from "../components/ShoppingCartModal";

export interface ModalDish {
isOpen: boolean,
dish: Dish | undefined
}
export function App() {

const [modalDish, setModalDish] = useState<ModalDish>({
    isOpen: false,
    dish: undefined
  })

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <GlobalStyle />
      <DishModal isOpen={modalDish.isOpen} dish={modalDish.dish} onClose={() => {setModalDish({
        isOpen: false,
        dish: undefined
      })}}/>
      <ShoppingCartModal/>
      <AppHeader/>
      <AppRoutes 
      selectDish={setModalDish}/>
      <AppFooter/>
      </BrowserRouter>
    </Provider>
    </>
  );
}
