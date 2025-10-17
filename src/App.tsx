import GlobalStyle from "./style";
import fundo from "url:./assets/fundo.png";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import RestaurantList from "./components/RestaurantList";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppHeader/>
      <RestaurantList/>
      <AppFooter/>
    </>
  );
}
