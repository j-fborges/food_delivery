import { useDispatch, useSelector } from "react-redux";
import { CartBackdrop, CartItem } from "./style";
import { RootReducer } from "../../app/store";
import {
  closeCart,
  removeItem,
} from "../../features/shoppingCart/shoppingCartSlice";

function ShoppingCartModal() {
  const items = useSelector((state: RootReducer) => state.shoppingCart.items);
  const isOpen = useSelector((state: RootReducer) => state.shoppingCart.isOpen);
  const cartTotal = useSelector(
    (state: RootReducer) => state.shoppingCart.cartTotal,
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
            <div>
              <div className="shopping-cart-items">
                {items.map((item, key) => {
                  return (
                    <CartItem key={key}>
                      <div className="cart-item">
                        <img
                          src={item.picture}
                          alt={`Picture of ${item.name}`}
                        />
                        <div>
                          <span className="dish-title">{item.name}</span>
                          <span className="dish-price">{item.price}</span>
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
                  <span>{`R$ ${cartTotal.toFixed(2)}`}</span>
                </div>
              </div>
            </div>
          </div>
        </CartBackdrop>
      )}
    </>
  );
}

export default ShoppingCartModal;
