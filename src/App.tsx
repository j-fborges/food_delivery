import GlobalStyle from "./style";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import RestaurantList from "./components/RestaurantList";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";

export function App() {

  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <AppHeader/>
      <AppRoutes/>
      <AppFooter/>
      </BrowserRouter>
    </>
  );
}
