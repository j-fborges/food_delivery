import { useDispatch } from "react-redux";
import { Dish } from "../../features/restaurants/restaurant";
import { ModalBackdrop } from "./style";
import { addItem, openCart } from "../../features/shoppingCart/shoppingCartSlice";

type DishModalProps = {
  dish: Dish | undefined;
  isOpen: boolean;
  onClose: () => void;
};

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

function DishModal({ dish, isOpen, onClose }: DishModalProps) {
  const dispatch = useDispatch()

  return (
    <>
      {isOpen && dish && (
        <>
          <ModalBackdrop onClick={onClose}>
            <div>
              <img src={dish?.picture} alt="" />
              <div>
                <div>
                  <span>{dish?.name}</span>
                  <p>{dish?.description}</p>
                  <p>{`Serve de ${dish?.servingSize}`}</p>
                </div>

                <button type="button" onClick={()=>{
                  onClose()
                  dispatch(openCart())
                  dispatch(addItem(dish))
                }}>
                  {`Adicionar ao carrinho - ${formatPrice(dish?.price)}`}
                </button>
              </div>
            </div>
          </ModalBackdrop>
        </>
      )}
    </>
  );
}

export default DishModal;
