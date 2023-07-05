import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeAsideInfo,
  CoffeeCart,
  CoffeeContainer,
  CoffeeInfo,
  CoffeeQuantity,
  CoffeeTypes,
} from "./styles";

import americano from "../../../../assets/americano.png";

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={americano} alt="" />
      <CoffeeTypes>
        <p>Tradicional</p>
      </CoffeeTypes>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeeInfo>
        <p>
          <span>R$ </span>9,90
        </p>
        <CoffeeAsideInfo>
          <CoffeeQuantity>
            <Minus size={14} />
            <span>1</span>
            <Plus size={14} />
          </CoffeeQuantity>
          <CoffeeCart>
            <ShoppingCart size={22} />
          </CoffeeCart>
        </CoffeeAsideInfo>
      </CoffeeInfo>
    </CoffeeContainer>
  );
}
