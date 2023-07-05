import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffee from "../../assets/principalCoffee.png";
import { AsideLeft, HomeIntro, IconContainer, InfoContainer } from "./styles";

export function Home() {
  return (
    <HomeIntro>
      <AsideLeft>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h4>
        <InfoContainer>
          <IconContainer backgroundColor="brand-yellow-dark">
            <div>
              <ShoppingCart size={16} />
            </div>
            <p>Compra simples e segura</p>
          </IconContainer>
          <IconContainer backgroundColor="base-text" width="294">
            <div>
              <Package size={16} />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </IconContainer>
          <IconContainer backgroundColor="brand-yellow">
            <div>
              <Timer size={16} />
            </div>
            <p>Entrega rápida e rastreada</p>
          </IconContainer>
          <IconContainer backgroundColor="brand-purple" width="294">
            <div>
              <Coffee size={16} />
            </div>
            <p>O Café chega fresquinho até você</p>
          </IconContainer>
        </InfoContainer>
      </AsideLeft>
      <img src={coffee} alt="" />
    </HomeIntro>
  );
}
