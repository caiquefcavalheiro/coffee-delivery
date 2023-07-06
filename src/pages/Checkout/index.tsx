import { CheckoutMainContainer } from "./styles";

import { FormMainContainer } from "./FormMainContainer";
import { CartInfoContainer } from "./CartInfoContainer";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Checkout() {
  const navigate = useNavigate();

  const { cartTotal } = useContext(CoffeeContext);

  useEffect(() => {
    if (cartTotal < 1) {
      navigate("/");
    }
  }, [cartTotal, navigate]);

  return (
    <CheckoutMainContainer>
      <FormMainContainer />
      <CartInfoContainer />
    </CheckoutMainContainer>
  );
}
