import { LogoBadge } from "../AppHeader/style";
import { FooterContainer } from "./style";
import fbookIcon from "url:../../assets/fbookLogo.png"
import twitterIcon from "url:../../assets/twitterLogo.png"
import igramIcon from "url:../../assets/igramLogo.png"

function AppFooter (){
    return (
        <FooterContainer>
            <LogoBadge/>
            <div>
                <img src={fbookIcon} alt="Efood Facebook profile link" />
                <img src={igramIcon} alt="Efood Instagram profile link" />
                <img src={twitterIcon} alt="Efood Twitter profile link" />
            </div>

            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </p>
        </FooterContainer>
    )
}

export default AppFooter