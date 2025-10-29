import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../app/store";
import { CartItem, CartItemsList } from "./style";
import {
  closeCart,
  removeItem,
  setShippingStage,
} from "../../features/shoppingCart/shoppingCartSlice";
import { formatPrice } from "../DishModal";

function ShoppingCartItems() {
  const items = useSelector((state: RootReducer) => state.shoppingCart.items);
  const cartTotal = useSelector(
    (state: RootReducer) => state.shoppingCart.cartTotal,
  );
  const dispatch = useDispatch();

  return (
    <CartItemsList>
      <div className="shopping-cart-items">
        {items.map((item, key) => {
          return (
            <CartItem key={key}>
              <div className="cart-item">
                <img src={item.picture} alt={`Picture of ${item.name}`} />
                <div>
                  <span className="dish-title">{item.name}</span>
                  <span className="dish-price">{formatPrice(item.price)}</span>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(removeItem(item));
                        if (items.length <= 1) dispatch(closeCart());
                      }}
                    />
                  </div>
                </div>
              </div>
            </CartItem>
          );
        })}
      </div>
      <div className="shopping-cart-footer">
        <div>
          <span>Valor total</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        <button type="button" onClick={() => dispatch(setShippingStage())}>
          Continuar com a entrega
        </button>
      </div>
    </CartItemsList>
  );
}

export default ShoppingCartItems;
