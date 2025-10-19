import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dish, Restaurant } from "../../models/restaurant";
import DishCard from "../DishCard";
import { RestaurantDishesContainer } from "./style";
import { fetchRestaurantDishesData } from "../../services/api";
import { useParams } from "react-router";
import { SuspenseContainer } from "../../style";
import DishModal from "../DishModal";
import { ModalDish } from "../../App";

type RestaurantDishesProps = {
  selectDish:Dispatch<SetStateAction<ModalDish>>
}

function RestaurantDishes({selectDish}:RestaurantDishesProps) {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantData = await fetchRestaurantDishesData(Number(id));
        restaurantData
          ? setRestaurant(restaurantData)
          : () => {
              throw new Error(
                "Something went wrong, restaurant data is undefined"
              );
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
                description={dish.description}
                name={dish.name}
                picture={dish.picture}
                key={key}
                selectDish={ () => {selectDish({isOpen: true, dish: { name: dish.name,
                  id: dish.id,
                  description: dish.description,
                  picture: dish.picture,
                  price: dish.price,
                  servingSize: dish.servingSize,
                }})}}
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
