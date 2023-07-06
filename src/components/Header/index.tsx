import {
  HeaderContainer,
  LocationContainer,
  RightContainer,
  RightIconContainer,
} from "./styles";

import coffeeLogo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { cartTotal } = useContext(CoffeeContext);

  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <RightContainer>
        <LocationContainer>
          <MapPin size={22} />
          <label>Porto Alegre, RS</label>
        </LocationContainer>
        <NavLink to="/checkout" title="checkout">
          <RightIconContainer>
            {cartTotal > 0 && <span>{cartTotal}</span>}
            <ShoppingCart size={22} />
          </RightIconContainer>
        </NavLink>
      </RightContainer>
    </HeaderContainer>
  );
}
