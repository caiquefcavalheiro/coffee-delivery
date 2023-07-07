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
import { InputContainer } from "../../../components/Input";

export function FormMainContainer() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
              <InputContainer name="zipCode" placeholder="CEP" />
              <InputContainer name="street" placeholder="Rua" />
              <InputContainer
                name="number"
                placeholder="Número"
                isNumber={true}
                type="number"
                min="1"
              />
              <InputContainer name="complement" placeholder="Complemento" />
              <InputContainer name="district" placeholder="Bairro" />
              <InputContainer name="city" placeholder="Cidade" />
              <InputContainer
                name="state"
                placeholder="UF"
                minLength={2}
                maxLength={2}
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
                value="credit"
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
                value="debit"
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
                value="money"
                {...register("paymentMethod")}
              />
              <div>
                <label htmlFor="money">
                  <Bank size={16} />
                  DINHEIRO
                </label>
              </div>
              {!!errors["paymentMethod"] && (
                <span>Selecione um método de pagamento</span>
              )}
            </FormInputRadioContainer>
          </FormContainer>
        </FormMain>
      </div>
    </div>
  );
}
