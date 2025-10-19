import { Dish } from "../../models/restaurant";
import { ModalBackdrop } from "./style";

type DishModalProps = {
  dish: Dish | undefined;
  isOpen: boolean;
  onClose: () => void;
};

function DishModal({ dish, isOpen, onClose }: DishModalProps) {
  return (
    <>
      {isOpen && (
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

                <button type="button">
                  {`Adicionar ao carrinho - R$ ${dish?.price.toFixed(2)}`}
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
