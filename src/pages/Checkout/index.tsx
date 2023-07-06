import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import {
  CheckoutMainContainer,
  FormContainer,
  FormHeader,
  FormInputRadioContainer,
  FormInputsContainer,
  FormMain,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutMainContainer>
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
                <div>
                  <input hidden id="" type="text" />

                  <CreditCard size={16} />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
                <div>
                  <input hidden id="" type="text" />

                  <Money size={16} />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
                <div>
                  <input hidden id="" type="text" />
                  <Bank size={16} />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
              </FormInputRadioContainer>
            </FormContainer>
          </FormMain>
        </form>
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div>
                <div>
                  <Minus />
                  <span>1</span>
                  <Plus />
                </div>
                <div>
                  <Trash />
                  <p>Remover</p>
                </div>
              </div>
            </div>
            <p>R$ 9,90</p>
          </div>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p>Total</p>
            <p>R$ 33,20</p>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </CheckoutMainContainer>
  );
}
