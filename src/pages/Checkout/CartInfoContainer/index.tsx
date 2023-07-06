import { Minus, Plus, Trash } from "phosphor-react";
import {
  AsideContainer,
  CartCoffee,
  CartCoffeeContainer,
  CartInfo,
  CoffeeInfo,
  CoffeeQuantity,
} from "./styles";

import americano from "../../../assets/americano.png";

export function CartInfoContainer() {
  return (
    <div>
      <h2>Cafés Selecionados</h2>
      <AsideContainer>
        <CartCoffeeContainer>
          <CartCoffee>
            <img src={americano} alt="coffee-image" />
            <div>
              <p>Expresso Tradicional</p>
              <CoffeeInfo>
                <CoffeeQuantity>
                  <Minus />
                  <span>1</span>
                  <Plus />
                </CoffeeQuantity>
                <button>
                  <Trash />
                  <p>Remover</p>
                </button>
              </CoffeeInfo>
            </div>
            <p>R$ 9,90</p>
          </CartCoffee>
          <CartCoffee>
            <img src={americano} alt="coffee-image" />
            <div>
              <p>Expresso Tradicional</p>
              <CoffeeInfo>
                <CoffeeQuantity>
                  <Minus />
                  <span>1</span>
                  <Plus />
                </CoffeeQuantity>
                <button>
                  <Trash />
                  <p>Remover</p>
                </button>
              </CoffeeInfo>
            </div>
            <p>R$ 9,90</p>
          </CartCoffee>
        </CartCoffeeContainer>
        <CartInfo>
          <div>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </CartInfo>
      </AsideContainer>
    </div>
  );
}
