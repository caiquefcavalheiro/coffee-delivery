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
import { useFormContext } from "react-hook-form";

export function FormMainContainer() {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Complete seu pedido</h2>
      <div>
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
              <input
                id="zipCode"
                type="text"
                placeholder="CEP"
                {...register("zipCode")}
              />
              <input
                id="street"
                type="text"
                placeholder="Rua"
                {...register("street")}
              />
              <input
                id="number"
                type="number"
                placeholder="Número"
                {...register("number", { valueAsNumber: true })}
              />
              <input
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              <input
                id="district"
                type="text"
                placeholder="Bairro"
                {...register("district")}
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register("city")}
              />
              <input
                id="state"
                type="text"
                placeholder="UF"
                {...register("state")}
              />
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
              <input
                type="radio"
                hidden
                id="credit"
                {...register("paymentMethod")}
              />
              <div>
                <label htmlFor="credit">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>
              </div>
              <input
                type="radio"
                hidden
                id="debit"
                {...register("paymentMethod")}
              />
              <div>
                <label htmlFor="debit">
                  <Money size={16} />
                  CARTÃO DE DÉBITO
                </label>
              </div>
              <input
                type="radio"
                hidden
                id="money"
                {...register("paymentMethod")}
              />
              <div>
                <label htmlFor="money">
                  <Bank size={16} />
                  DINHEIRO
                </label>
              </div>
            </FormInputRadioContainer>
          </FormContainer>
        </FormMain>
      </div>
    </div>
  );
}
