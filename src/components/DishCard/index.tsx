import { DishCardContainer } from "./style";
import { Dish } from "../../features/restaurants/restaurant";

type DishCardProps = {
  dish: Dish;
  selectDish: () => void;
};

function DishCard({ dish, selectDish }: DishCardProps) {
  return (
    <DishCardContainer onClick={selectDish}>
      <div>
        <div
          className="dish-image"
          style={{ backgroundImage: `url(${dish.picture})` }}
        />
        <span>{dish.name}</span>
        <p>{dish.description}</p>
      </div>
      <button>Adicionar ao carrinho</button>
    </DishCardContainer>
  );
}

export default DishCard;
