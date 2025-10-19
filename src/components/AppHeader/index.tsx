import { Link, useLocation } from "react-router";
import { HomeHeader, LogoBadge, RestaurantHeader } from "./style";
import fundo from "url:../../assets/fundo.png";

function AppHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

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
        <span>0 produto(s) no carrinho</span>
      </div>
    </RestaurantHeader>
  );
}

export default AppHeader;
