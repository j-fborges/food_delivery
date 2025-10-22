import styled from "styled-components";
import { colors } from "../../app/style";

export const RestaurantCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 472px;
  max-height: 472px;
  width: 100%;
  background-color: #FFF;
  cursor: pointer;
  
  .restaurant-img {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      background-size: cover;
      width: 100%;
      height: 217px;
      
      .badges-row {
          display: flex;
          flex-direction: row;
          gap: 8px;
          padding: 16px;
        }
    }
    
    .restaurant-info {
        display: flex;
        flex-direction: column;
        padding: 8px;
        border-width: 1px;
        border-top-width: 0px;
        border-color: ${colors.vermillion};
        border-style: solid;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 700;
        font-size: 16px;
        color: ${colors.vermillion};
      }

      .rating-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 55px;

        span {
          font-size: 18px;
          font-weight: 700;
          color: ${colors.vermillion};
        }

        img {
          width: 21px;
          height: 21px;
        }
      }
    }

    p {
      color: ${colors.vermillion};
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin: 16px 0;
    }

}

.know-more, .category-badge {
  display: inline;
  justify-content: center;
  align-items: center;
  background-color: ${colors.vermillion};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  border-width: 0px;
  padding: 8px;
    width: fit-content;
}
`;
