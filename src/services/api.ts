import { Dish, Restaurant } from "../models/restaurant";

interface restaurantFetchFields {
    titulo: string,
    tipo: string,
    id: number,
    destacado: boolean,
    descricao: string,
    capa: string,
    avaliacao: number,
    cardapio?: dishesFetchFields,
}

interface dishesFetchFields {
    nome: string,
    id: number,
    descricao: string,
    porcao: string,
    preco: number,
    foto: string,
}

export const fetchRestaurantsData = async (): Promise<Restaurant[] | undefined> => {
  try {
    const response = await fetch(
      "https://api-ebac.vercel.app/api/efood/restaurantes"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
     const rawData = await response.json();

    const data:Restaurant[] = []
    
    rawData.map((restaurant:restaurantFetchFields)=> {
        data.push({
            name: restaurant.titulo,
            id: restaurant.id,
            category: restaurant.tipo,
            isHighlighted: restaurant.destacado,
            description: restaurant.descricao,
            picture: restaurant.capa,
            rating: restaurant.avaliacao,
            dishes: []
        })
    })

    return data;
  } catch (error) {

    console.error('Fetch error:', error);
    alert(`Fetch error: ${error}`)
  }
};

export const fetchRestaurantDishesData = async (id:number):Promise<Restaurant | undefined> => {
    try {
    const response = await fetch(
      `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const rawData = await response.json();

    const formatedDishes:Dish[] = []
    
    rawData.cardapio.map((dish:dishesFetchFields)=>{
      formatedDishes.push({
        name: dish.nome,
        description: dish.descricao,
        picture: dish.foto,
        price: dish.preco,
        servingSize: dish.porcao,
        id: dish.id
      })
    })

    const data:Restaurant = {
      name: rawData.titulo,
            id: rawData.id,
            category: rawData.tipo,
            isHighlighted: rawData.destacado,
            description: rawData.descricao,
            picture: rawData.capa,
            rating: rawData.avaliacao,
            dishes: formatedDishes
    }
    
    return data;
  } catch (error) {

    console.error('Fetch error:', error);
    alert(`Fetch error: ${error}`)
  }
}