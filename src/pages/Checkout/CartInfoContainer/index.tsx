import { Minus, Plus, Trash } from "phosphor-react";
import {
  AsideContainer,
  CartCoffee,
  CartCoffeeContainer,
  CartInfo,
  CoffeeInfo,
  CoffeeQuantity,
} from "./styles";

import { useContext } from "react";
import { CoffeeContext } from "../../../context/CoffeeContext";

export function CartInfoContainer() {
  const {
    userCart,
    addCoffeeToCart,
    removeCoffeeQuantityFromCart,
    removeCoffeeFromCart,
  } = useContext(CoffeeContext);

  const coffeesWithQuantityGreaterThanZero = userCart.filter(
    (coffee) => coffee.quantity > 0
  );

  const cartTotalPrice = userCart.reduce(
    (acc, coffee) => (acc += coffee.quantity * coffee.price),
    0
  );

  const cartTotalPriceToBRL = cartTotalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const delivery = 3.5;

  const deliveryToBRL = delivery.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const cartPriceAndDeliveryToBRL = (cartTotalPrice + delivery).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  return (
    <div>
      <h2>Cafés Selecionados</h2>
      <AsideContainer>
        <CartCoffeeContainer>
          {coffeesWithQuantityGreaterThanZero.map((coffee) => {
            const { id, image, price, quantity, title } = coffee;

            const imagem = `./assets/${image}.png`;

            const priceConvert = price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });

            return (
              <CartCoffee key={id}>
                <img src={imagem} alt="coffee-image" />
                <div>
                  <p>{title}</p>
                  <CoffeeInfo>
                    <CoffeeQuantity>
                      <Minus
                        type="button"
                        onClick={() => removeCoffeeQuantityFromCart(coffee)}
                      />
                      <span>{quantity}</span>
                      <Plus
                        type="button"
                        onClick={() => addCoffeeToCart(coffee)}
                      />
                    </CoffeeQuantity>
                    <button
                      type="button"
                      onClick={() => removeCoffeeFromCart(coffee)}>
                      <Trash />
                      <p>Remover</p>
                    </button>
                  </CoffeeInfo>
                </div>
                <p>{priceConvert}</p>
              </CartCoffee>
            );
          })}
        </CartCoffeeContainer>
        <CartInfo>
          <div>
            <p>Total de itens</p>
            <span>{cartTotalPriceToBRL}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>{deliveryToBRL}</span>
          </div>
          <div>
            <p>Total</p>
            <span>{cartPriceAndDeliveryToBRL}</span>
          </div>
          <button type="submit">CONFIRMAR PEDIDO</button>
        </CartInfo>
      </AsideContainer>
    </div>
  );
}
