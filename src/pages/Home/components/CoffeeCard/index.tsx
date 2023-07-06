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
import { useContext } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { title, price, image, content, categories, quantity } = coffee;

  const { cartTotal, addCoffeeToCart, removeCoffeeQuantityFromCart } =
    useContext(CoffeeContext);

  const imagem = `./src/assets/${image}.png`;

  const priceConvert = price
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "");

  const navigate = useNavigate();

  function changePage(to: string) {
    if (cartTotal > 0) {
      navigate(to);
    } else {
      toast.error("É necessário ter ao menos 1 produto no carrinho");
    }
  }

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
            <Minus
              size={14}
              onClick={() => removeCoffeeQuantityFromCart(coffee)}
            />
            <span>{quantity}</span>
            <Plus size={14} onClick={() => addCoffeeToCart(coffee)} />
          </CoffeeQuantity>

          <CoffeeCart onClick={() => changePage("/checkout")}>
            <ShoppingCart size={22} />
          </CoffeeCart>
        </CoffeeAsideInfo>
      </CoffeeInfo>
    </CoffeeContainer>
  );
}
