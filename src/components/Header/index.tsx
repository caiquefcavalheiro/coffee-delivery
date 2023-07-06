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
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function Header() {
  const { cartTotal } = useContext(CoffeeContext);

  const navigate = useNavigate();

  function changePage(to: string) {
    if (cartTotal > 0) {
      navigate(to);
    } else {
      toast.error("É necessário ter ao menos 1 produto no carrinho");
    }
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <RightContainer>
        <LocationContainer>
          <MapPin size={22} />
          <label>Porto Alegre, RS</label>
        </LocationContainer>
        <RightIconContainer onClick={() => changePage("/checkout")}>
          {cartTotal > 0 && <span>{cartTotal}</span>}
          <ShoppingCart size={22} />
        </RightIconContainer>
      </RightContainer>
    </HeaderContainer>
  );
}
