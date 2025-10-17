import { HomeHeader, LogoBadge } from "./style";
import fundo from "url:../../assets/fundo.png";

type AppHeaderProps = {
  isHomePage?: boolean;
};

function AppHeader({ isHomePage = true }: AppHeaderProps) {
  return isHomePage ? (
    <HomeHeader style={{ backgroundImage: `url(${fundo})` }}>
      <LogoBadge alt="Efood Logo"/>

      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HomeHeader>
  ) : (
    <header></header>
  );
}

export default AppHeader;
