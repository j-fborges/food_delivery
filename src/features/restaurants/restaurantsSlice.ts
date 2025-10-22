import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { Dish, Restaurant } from "./restaurant";

export interface restaurantFetchFields {
  titulo: string;
  tipo: string;
  id: number;
  destacado: boolean;
  descricao: string;
  capa: string;
  avaliacao: number;
  cardapio?: dishesFetchFields[];
}

export interface dishesFetchFields {
  nome: string;
  id: number;
  descricao: string;
  porcao: string;
  preco: number;
  foto: string;
}

type RestaurantsSliceState = {
  restaurants: Restaurant[];
  currentRestaurant: Restaurant | undefined;
  failedToLoadRestaurants: boolean;
  loadingRestaurants: string;
  errorLoadingRestaurants: SerializedError;
  failedToLoadCurrentRestaurant: boolean;
  loadingCurrentRestaurant: string;
  errorLoadingCurrentRestaurant: SerializedError;
};

const initialState: RestaurantsSliceState = {
  restaurants: [],
  currentRestaurant: undefined,
  loadingRestaurants: "",
  errorLoadingRestaurants: {},
  failedToLoadRestaurants: false,
  loadingCurrentRestaurant: "",
  errorLoadingCurrentRestaurant: {},
  failedToLoadCurrentRestaurant: false,
};

export const loadRestaurants = createAsyncThunk(
  "restaurants/loadRestaurants",
  async () => {
    const response = await fetch(
      `https://api-ebac.vercel.app/api/efood/restaurantes`
    );

    const rawData = await response.json();

    const data: Restaurant[] = [];

    rawData.map((restaurant: restaurantFetchFields) => {
      let formatedDishes: Dish[] = [];

      restaurant.cardapio &&
        restaurant.cardapio.map((dish: dishesFetchFields) => {
          formatedDishes.push({
            name: dish.nome,
            description: dish.descricao,
            picture: dish.foto,
            price: dish.preco,
            servingSize: dish.porcao,
            id: dish.id,
          });
        });

      data.push({
        name: restaurant.titulo,
        id: restaurant.id,
        category: restaurant.tipo,
        isHighlighted: restaurant.destacado,
        description: restaurant.descricao,
        picture: restaurant.capa,
        rating: restaurant.avaliacao,
        dishes: formatedDishes,
      });
    });

    return data;
  }
);

export const loadcurrentRestaurant = createAsyncThunk(
  "restaurants/loadCurrentRestaurant",
  async (id: string) => {
    const response = await fetch(
      `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`
    );

    const rawData = await response.json();

    const formatedDishes: Dish[] = [];
    
    rawData.cardapio.map((dish: dishesFetchFields) => {
      formatedDishes.push({
        name: dish.nome,
        description: dish.descricao,
        picture: dish.foto,
        price: dish.preco,
        servingSize: dish.porcao,
        id: dish.id,
      });
    });

    const data: Restaurant = {
      name: rawData.titulo,
      id: rawData.id,
      category: rawData.tipo,
      isHighlighted: rawData.destacado,
      description: rawData.descricao,
      picture: rawData.capa,
      rating: rawData.avaliacao,
      dishes: formatedDishes,
    };

    return data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addAsyncThunk(loadRestaurants, {
        pending: (state) => {
          state.loadingRestaurants = "pending";
        },
        fulfilled: (state, action: PayloadAction<Restaurant[]>) => {
          state.restaurants = action.payload;
        },
        rejected: (state, action) => {
          state.errorLoadingRestaurants = action.error;
          console.error(action.error);
          state.failedToLoadRestaurants = true;
        },
        settled: (state, action) => {
          state.loadingRestaurants = action.meta.requestStatus;
        },
      })
      .addAsyncThunk(loadcurrentRestaurant, {
        pending: (state) => {
          state.loadingCurrentRestaurant = "pending";
        },
        fulfilled: (state, action: PayloadAction<Restaurant>) => {
          state.currentRestaurant = action.payload;
        },
        rejected: (state, action) => {
          state.errorLoadingCurrentRestaurant = action.error;
          console.error(action.error);
          state.failedToLoadCurrentRestaurant = true;
        },
        settled: (state, action) => {
          state.loadingCurrentRestaurant = action.meta.requestStatus;
        },
      });
  },
});

export default restaurantsSlice.reducer;
