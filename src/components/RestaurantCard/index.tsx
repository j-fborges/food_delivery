import { Link } from "react-router";
import { Restaurant } from "../../features/restaurants/restaurant";
import { RestaurantCardContainer } from "./style";
import star from "url:../../assets/star.png";

type RestaurantCardProps = Restaurant;

function RestaurantCard({
  id,
  name,
  category,
  description,
  isHighlighted,
  picture,
  rating,
}: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${id}`}>
      <RestaurantCardContainer>
        <div
          className="restaurant-img"
          style={{ backgroundImage: `url(${picture})` }}
        >
          <div className="badges-row">
            {isHighlighted && (
              <span className="category-badge">Destaque da semana</span>
            )}
            <span className="category-badge">{category}</span>
          </div>
        </div>
        <div className="restaurant-info">
          <div className="title-row">
            <span>{name}</span>
            <div className="rating-row">
              <span>{rating}</span>
              <img src={star} alt="Rating Star Icon" />
            </div>
          </div>
          <p>{description}</p>
          <button className="know-more" type="button">
            Saiba Mais
          </button>
        </div>
      </RestaurantCardContainer>
    </Link>
  );
}

export default RestaurantCard;
