import { useDispatch, useSelector } from "react-redux";
import { CartBackdrop } from "./style";
import { RootReducer } from "../../app/store";
import {
    closeCart,
} from "../../features/shoppingCart/shoppingCartSlice";
import ShoppingCartItems from "../ShoppingCartItems";

function ShoppingCartModal() {

    const isOpen = useSelector((state: RootReducer) => state.shoppingCart.isOpen);

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
                        <ShoppingCartItems />
                    </div>
                </CartBackdrop>
            )}
        </>
    );
}

export default ShoppingCartModal;
