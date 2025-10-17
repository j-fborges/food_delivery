import { DishCardContainer } from "./style";
import { Dish, dishes } from "../../models/restaurant";

type DishCardProps = Omit<Dish, "price" | "servingSize">

function DishCard ({name, description, picture}:DishCardProps){

    return (
        <DishCardContainer>
            <div className="dish-image" style={{backgroundImage: `url(${picture})`}}/>
            <span>{name}</span>
            <p>
                {description}
            </p>
            <button>
                Adicionar ao carrinho
            </button>
        </DishCardContainer>
    )
}

export default DishCard