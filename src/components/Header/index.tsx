import {
  HeaderContainer,
  LocationContainer,
  RightContainer,
  RightIconContainer,
} from "./styles";
import coffeeLogo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <RightContainer>
        <LocationContainer>
          <MapPin size={22} />
          <label>Porto Alegre, RS</label>
        </LocationContainer>
        <RightIconContainer>
          <ShoppingCart size={22} />
        </RightIconContainer>
      </RightContainer>
    </HeaderContainer>
  );
}
