import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  FormContainer,
  FormHeader,
  FormInputRadioContainer,
  FormInputsContainer,
  FormMain,
} from "./styles";

export function FormMainContainer() {
  return (
    <div>
      <h2>Complete seu pedido</h2>
      <form>
        <FormMain>
          <FormContainer>
            <FormHeader $iconColor="brand-yellow-dark">
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <FormInputsContainer>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </FormInputsContainer>
          </FormContainer>
          <FormContainer>
            <FormHeader $iconColor="brand-purple">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
            <FormInputRadioContainer>
              <input type="radio" hidden id="credit" name="payment" />
              <div>
                <label htmlFor="credit">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>
              </div>
              <input type="radio" hidden id="debit" name="payment" />
              <div>
                <label htmlFor="debit">
                  <Money size={16} />
                  CARTÃO DE DÉBITO
                </label>
              </div>
              <input type="radio" hidden id="money" name="payment" />
              <div>
                <label htmlFor="money">
                  <Bank size={16} />
                  DINHEIRO
                </label>
              </div>
            </FormInputRadioContainer>
          </FormContainer>
        </FormMain>
      </form>
    </div>
  );
}
