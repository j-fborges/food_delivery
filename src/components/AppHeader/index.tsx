import { Link, useLocation } from "react-router";
import { HomeHeader, LogoBadge, RestaurantHeader } from "./style";
import fundo from "url:../../assets/fundo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../app/store";
import { openCart } from "../../features/shoppingCart/shoppingCartSlice";

function AppHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

  const cartItemsLength = useSelector((state:RootReducer)=>state.shoppingCart.items.length)
  const dispatch = useDispatch()

  return currentPath === "/" ? (
    <HomeHeader style={{ backgroundImage: `url(${fundo})` }}>
      <LogoBadge alt="Efood Logo" />

      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HomeHeader>
  ) : (
    <RestaurantHeader style={{ backgroundImage: `url(${fundo})` }}>
      <div>
        <Link to={"/"}>
          <span>Restaurantes</span>
        </Link>
        <LogoBadge alt="Efood Logo" />
        <span onClick={() => dispatch(openCart())}>{`${cartItemsLength} produto(s) no carrinho`}</span>
      </div>
    </RestaurantHeader>
  );
}

export default AppHeader;
