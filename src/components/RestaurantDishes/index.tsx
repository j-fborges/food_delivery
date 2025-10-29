import { Dispatch, SetStateAction, useEffect } from "react";
import DishCard from "../DishCard";
import { RestaurantDishesContainer } from "./style";
import { useParams } from "react-router";
import { SuspenseContainer } from "../../app/style";
import { ModalDish } from "../../app/App";
import { useSelector } from "react-redux";
import { RootReducer, useAppDispatch } from "../../app/store";
import { loadcurrentRestaurant } from "../../features/restaurants/restaurantsSlice";

type RestaurantDishesProps = {
  selectDish: Dispatch<SetStateAction<ModalDish>>;
};

function RestaurantDishes({ selectDish }: RestaurantDishesProps) {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const restaurant = useSelector(
    (state: RootReducer) => state.restaurants.currentRestaurant,
  );

  const isLoading =
    useSelector(
      (state: RootReducer) => state.restaurants.loadingCurrentRestaurant,
    ) == "pending";
  const isError = useSelector(
    (state: RootReducer) => state.restaurants.failedToLoadCurrentRestaurant,
  );

  useEffect(() => {
    dispatch(loadcurrentRestaurant(String(id)));
  }, [dispatch]);

  return isLoading ? (
    <SuspenseContainer>
      <span> LOADING...</span>
    </SuspenseContainer>
  ) : isError || !restaurant ? (
    <SuspenseContainer>
      <span> Something went wrong! </span>
    </SuspenseContainer>
  ) : (
    <>
      <RestaurantDishesContainer>
        <div
          className="restaurant-banner"
          style={{ backgroundImage: `url(${restaurant.picture})` }}
        >
          <div className="backdrop" />
          <div>
            <span className="restaurant-category">{restaurant.category}</span>
            <span className="restaurant-name">{restaurant.name}</span>
          </div>
        </div>
        <div className="dishes-list-container">
          <div className="dishes-list">
            {restaurant.dishes.map((dish, key) => {
              return (
                <DishCard
                  dish={dish}
                  key={key}
                  selectDish={() => {
                    selectDish({
                      isOpen: true,
                      dish: {
                        name: dish.name,
                        id: dish.id,
                        description: dish.description,
                        picture: dish.picture,
                        price: dish.price,
                        servingSize: dish.servingSize,
                      },
                    });
                  }}
                />
              );
            })}
          </div>
        </div>
      </RestaurantDishesContainer>
    </>
  );
}

export default RestaurantDishes;
