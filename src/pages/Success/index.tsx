import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  FirstContainer,
  SuccessContainer,
  SuccessIcon,
  SuccessInfo,
  SuccessInfoContainer,
} from "./styles";

import illustration from "../../../public/assets/Illustration.png";
import { purchaseFormData } from "../Checkout";

export function Success() {
  const getAddressInfoAndPaymentMethod =
    localStorage.getItem("@coffeeDelivery:address-info.1.0.0") || "";

  const addressAndPayment: purchaseFormData = JSON.parse(
    getAddressInfoAndPaymentMethod
  );

  const paymentMethod = {
    debit: "Cartão de Débito",
    credit: "Cartão de Crédito",
    money: "Dinheiro",
  };

  return (
    <SuccessContainer>
      <FirstContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <SuccessInfoContainer>
          <div>
            <SuccessInfo>
              <SuccessIcon $bgcolor="brand-purple">
                <MapPin size={16} />
              </SuccessIcon>
              <div>
                <p>
                  Entrega em <span>{addressAndPayment.street || ""}</span>
                </p>
                <p>
                  {addressAndPayment.city || ""} -{" "}
                  {addressAndPayment.state.toUpperCase() || ""}
                </p>
              </div>
            </SuccessInfo>
            <SuccessInfo>
              <SuccessIcon $bgcolor="brand-yellow">
                <Timer size={16} />
              </SuccessIcon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <span>20min - 30min</span>
                </p>
              </div>
            </SuccessInfo>
            <SuccessInfo>
              <SuccessIcon $bgcolor="brand-yellow-dark">
                <CurrencyDollar size={16} />
              </SuccessIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <span>
                    {paymentMethod[addressAndPayment.paymentMethod] || ""}
                  </span>
                </p>
              </div>
            </SuccessInfo>
          </div>
        </SuccessInfoContainer>
      </FirstContainer>
      <img src={illustration} alt="" />
    </SuccessContainer>
  );
}
