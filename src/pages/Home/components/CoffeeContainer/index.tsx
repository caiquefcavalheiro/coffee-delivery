import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeAsideInfo,
  CoffeeCart,
  CoffeeContainer,
  CoffeeInfo,
  CoffeeQuantity,
  CoffeeTypes,
} from "./styles";

import { Coffee } from "../../../../database/coffees";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { title, price, image, content, categories } = coffee;

  const imagem = `./src/assets/${image}.png`;

  const priceConvert = price
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "");

  return (
    <CoffeeContainer>
      <img src={imagem} alt="" />
      <CoffeeTypes>
        {categories.map((category) => {
          return <p key={category}>{category}</p>;
        })}
      </CoffeeTypes>
      <h4>{title}</h4>
      <p>{content}</p>
      <CoffeeInfo>
        <p>
          <span>R$ </span>
          {priceConvert}
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
