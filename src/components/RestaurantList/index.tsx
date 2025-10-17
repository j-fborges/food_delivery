import { restaurants } from "../../models/restaurant";
import RestaurantCard from "../RestaurantCard";
import { RestaurantListContainer } from "./style";

function RestaurantList() {
  return (
    <RestaurantListContainer>
      <div>
        {restaurants.map((restaurant, key) => {
          return (
            <RestaurantCard
              name={restaurant.name}
              description={restaurant.description}
              rating={restaurant.rating}
              category={restaurant.category}
              dishes={[]}
              isHighlighted={restaurant.isHighlighted}
              picture={restaurant.picture}
              key={key}
            />
          );
        })}
      </div>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
