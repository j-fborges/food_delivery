import styled from "styled-components";
import { colors } from "../../app/style";

export const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-height: 338px;
  background-color: ${colors.vermillion};
  padding: 8px;
  justify-content: space-between;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .dish-image {
      width: 304px;
      height: 167px;
      background-size: cover;
    }

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      color: ${colors.cream};
    }
  }
  button {
    background-color: ${colors.pale};
    color: ${colors.vermillion};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    border-width: 0px;
    cursor: pointer;
  }
`;
