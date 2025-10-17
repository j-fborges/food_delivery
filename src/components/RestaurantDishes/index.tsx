import { restaurants } from "../../models/restaurant";
import DishCard from "../DishCard";
import { RestaurantDishesContainer } from "./style";

function RestaurantDishes() {
  const restaurant = restaurants[1];

  return (
    <RestaurantDishesContainer>
      <div
        className="restaurant-banner"
        style={{ backgroundImage: `url(${restaurant.picture})` }}
      >
        <div className="backdrop"/>
        <div>
          <span className="restaurant-category">{restaurant.category}</span>
          <span className="restaurant-name">{restaurant.name}</span>
        </div>
      </div>
      <div className="dishes-list-container">
        <div className="dishes-list">
            {restaurant.dishes.map((dish, key) => {
                return <DishCard 
                description={dish.description}
                name={dish.name}
                picture={dish.picture}
                key={key}
                />
            })}
        </div>
      </div>
    </RestaurantDishesContainer>
  );
}

export default RestaurantDishes;
