import sushi from "url:../assets/sushi.png";
import pasta from "url:../assets/pasta.png";
import pizza from "url:../assets/pizza.png";

export class Restaurant {
  id = 0
  name = "";
  picture = "";
  category = "";
  isHighlighted = false;
  rating = 0;
  description = "";
  dishes: Dish[] = [];

  constructor({
    _id,
    _name,
    _picture,
    _category,
    _isHighlighted,
    _rating,
    _description,
    _dishes,
  }: RestaurantType) {
    this.id = _id;
    this.name = _name;
    this.picture = _picture;
    this.category = _category;
    this.isHighlighted = _isHighlighted;
    this.rating = _rating;
    this.description = _description;
  }
}

export type RestaurantType = {
  _id: number
  _name: string;
  _picture: string;
  _category: RestaurantCategoryTypes;
  _isHighlighted: boolean;
  _rating: number;
  _description: string;
  _dishes?: Dish[];
};

enum RestaurantCategoryTypes {
  JAPONESE = "Japonesa",
  ITALIAN = "Italiana",
}

export class Dish {
  name = "";
  id = 0;
  picture = "";
  description = "";
  servingSize = "";
  price = 0;

  constructor({
    _name,
    _id,
    _picture,
    _servingSize,
    _description,
    _price,
  }: DishType) {
    this.name = _name;
    this.id = _id;
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
  _id: number
};
