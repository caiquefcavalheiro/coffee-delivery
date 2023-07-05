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

export function Checkout() {
  return (
    <div>
      <div>
        <form>
          <div>
            <div>
              <MapPinLine />
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Opcional" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
            <div>
              <div>
                <CurrencyDollar />
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
              <div>
                <input id="" type="text" />
                <div>
                  <CreditCard />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
              </div>
              <div>
                <input id="" type="text" />
                <div>
                  <Money />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
              </div>
              <div>
                <input id="" type="text" />
                <div>
                  <Bank />
                  <label htmlFor="">CARTÃO DE CRÉDITO</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h3>Cafés Selecionados</h3>
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
    </div>
  );
}
