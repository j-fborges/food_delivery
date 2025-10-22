import { useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import { RestaurantListContainer } from "./style";
import { SuspenseContainer } from "../../app/style";
import { useSelector } from "react-redux";
import { loadRestaurants } from "../../features/restaurants/restaurantsSlice";
import { RootReducer, useAppDispatch } from "../../app/store";

function RestaurantList() {
  const dispatch = useAppDispatch()

  const restaurants = useSelector(
    (state: RootReducer) => state.restaurants.restaurants
  );

  const isLoading = useSelector((state:RootReducer)=> state.restaurants.loadingRestaurants) == 'pending'
  const isError = useSelector((state:RootReducer)=> state.restaurants.failedToLoadRestaurants)
  

    useEffect(()=>{
      dispatch(loadRestaurants())

    },[dispatch])

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
