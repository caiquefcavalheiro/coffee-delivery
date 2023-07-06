import { CheckoutMainContainer } from "./styles";

import { FormMainContainer } from "./FormMainContainer";
import { CartInfoContainer } from "./CartInfoContainer";

export function Checkout() {
  return (
    <CheckoutMainContainer>
      <FormMainContainer />
      <CartInfoContainer />
    </CheckoutMainContainer>
  );
}
