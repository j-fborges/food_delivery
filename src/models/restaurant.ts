import sushi from "url:../assets/sushi.png";
import pasta from "url:../assets/pasta.png";
import pizza from "url:../assets/pizza.png";

export class Restaurant {
  name = "";
  picture = "";
  category = "";
  isHighlighted = false;
  rating = 0;
  description = "";
  dishes: Dish[] = [];

  constructor({
    _name,
    _picture,
    _category,
    _isHighlighted,
    _rating,
    _description,
    _dishes,
  }: RestaurantType) {
    this.name = _name;
    this.picture = _picture;
    this.category = _category;
    this.isHighlighted = _isHighlighted;
    this.rating = _rating;
    this.description = _description;
    this.dishes = _dishes;
  }
}

export type RestaurantType = {
  _name: string;
  _picture: string;
  _category: RestaurantCategoryTypes;
  _isHighlighted: boolean;
  _rating: number;
  _description: string;
  _dishes: Dish[];
};

enum RestaurantCategoryTypes {
  JAPONESE = "Japonesa",
  ITALIAN = "Italiana",
}

export class Dish {
  name = "";
  picture = "";
  description = "";
  servingSize = "";
  price = 0;

  constructor({
    _name,
    _picture,
    _servingSize,
    _description,
    _price,
  }: DishType) {
    this.name = _name;
    this.picture = _picture;
    this.servingSize = _servingSize;
    this.description = _description;
    this.price = _price;
  }
}

type DishType = {
  _name: string;
  _picture: string;
  _servingSize: string;
  _description: string;
  _price: number;
};

export const dishes: Dish[] = [
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
  {
    name: "Pizza Marguerita",
    picture: pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    servingSize: "2 a 3 pessoas",
    price: 60.9,
  },
];

export const restaurants: Restaurant[] = [
  {
    name: "Hioki Sushi",
    picture: sushi,
    category: RestaurantCategoryTypes.JAPONESE,
    isHighlighted: true,
    rating: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    dishes: dishes,
  },
  {
    name: "La Dolce Vita Trattoria",
    picture: pasta,
    category: RestaurantCategoryTypes.ITALIAN,
    isHighlighted: false,
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    dishes: dishes,
  },
  {
    name: "La Dolce Vita Trattoria",
    picture: pasta,
    category: RestaurantCategoryTypes.ITALIAN,
    isHighlighted: false,
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    dishes: dishes,
  },
  {
    name: "La Dolce Vita Trattoria",
    picture: pasta,
    category: RestaurantCategoryTypes.ITALIAN,
    isHighlighted: false,
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    dishes: dishes,
  },
  {
    name: "La Dolce Vita Trattoria",
    picture: pasta,
    category: RestaurantCategoryTypes.ITALIAN,
    isHighlighted: false,
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    dishes: dishes,
  },
  {
    name: "La Dolce Vita Trattoria",
    picture: pasta,
    category: RestaurantCategoryTypes.ITALIAN,
    isHighlighted: false,
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    dishes: dishes,
  },
];
