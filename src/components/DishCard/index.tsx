import { DishCardContainer } from "./style";
import { Dish } from "../../models/restaurant";

type DishCardProps = Omit<Dish, "price" | "servingSize" | "id"> & {
    selectDish: ()=> void
}

function DishCard ({name, description, picture, selectDish}:DishCardProps){

    return (
        <DishCardContainer onClick={selectDish}>
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