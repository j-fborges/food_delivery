import { useDispatch, useSelector } from "react-redux";
import { CartBackdrop } from "./style";
import { RootReducer } from "../../app/store";
import {
  closeCart,
  shoppingCartStage,
} from "../../features/shoppingCart/shoppingCartSlice";
import ShoppingCartItems from "../ShoppingCartItems";
import ShippingAddressForm from "../ShippingAddressForm";
import PaymentForm from "../PaymentForm";

function ShoppingCartModal() {
  const isOpen = useSelector((state: RootReducer) => state.shoppingCart.isOpen);
  const shoppingStage = useSelector(
    (state: RootReducer) => state.shoppingCart.cartStage,
  );

  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <CartBackdrop
          onClick={() => {
            dispatch(closeCart());
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {shoppingStage == shoppingCartStage.CART ? (
              <ShoppingCartItems />
            ) : shoppingStage == shoppingCartStage.SHIPPING ? (
              <ShippingAddressForm />
            ) : (
              <PaymentForm />
            )}
          </div>
        </CartBackdrop>
      )}
    </>
  );
}

export default ShoppingCartModal;
