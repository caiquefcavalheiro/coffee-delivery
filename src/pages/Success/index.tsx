import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  FirstContainer,
  SuccessContainer,
  SuccessIcon,
  SuccessInfo,
  SuccessInfoContainer,
} from "./styles";

import illustration from "../../assets/Illustration.png";

export function Success() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <span>Cartão de Crédito</span>
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
