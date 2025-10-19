import { useEffect, useState } from "react";
import { Dish, Restaurant } from "../../models/restaurant";
import RestaurantCard from "../RestaurantCard";
import { RestaurantListContainer } from "./style";
import { fetchRestaurantsData } from "../../services/api";
import { SuspenseContainer } from "../../style";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantsData = await fetchRestaurantsData();
        restaurantsData
          ? setRestaurants(restaurantsData)
          : () => {
              throw new Error("Something went wrong, restaurants data is undefined");
            };
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <SuspenseContainer>
      <span> LOADING...</span>
    </SuspenseContainer>
  ) : isError ? (
    <SuspenseContainer>
      <span> Something went wrong! </span>
    </SuspenseContainer>
  ) : (
    <RestaurantListContainer>
      <div>
        {restaurants.map((restaurant, key) => {
          return (
            <RestaurantCard
              id={restaurant.id}
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
