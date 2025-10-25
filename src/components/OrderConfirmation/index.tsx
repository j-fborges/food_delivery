import { useDispatch, useSelector } from "react-redux";
import { OrderConfirmationContainer } from "./style";
import { RootReducer } from "../../app/store";
import {
  closeCart,
  setShoppingStage,
} from "../../features/shoppingCart/shoppingCartSlice";

function OrderConfirmation() {
  const orderN = useSelector(
    (state: RootReducer) => state.shoppingCart.orderId,
  );
  const dispatch = useDispatch();

  return (
    <OrderConfirmationContainer>
      <h4>{`Pedido realizado - ${orderN}`}</h4>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(closeCart());
          dispatch(setShoppingStage());
        }}
      >
        Concluir
      </button>
    </OrderConfirmationContainer>
  );
}

export default OrderConfirmation;
