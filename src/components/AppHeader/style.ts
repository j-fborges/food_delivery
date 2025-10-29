import styled from "styled-components";
import { colors } from "../../app/style";
import logo from "url:../../assets/logo.png";

export const HomeHeader = styled.header`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 360px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 80px;

  h1 {
    font-weight: 900;
    color: ${colors.vermillion};
    font-size: 36px;
    max-width: 539px;
    text-align: center;
  }
`;

export const RestaurantHeader = styled.header`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 160px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 160px;
    max-width: 1024px;

    span,
    a {
      font-weight: 900;
      color: ${colors.vermillion};
      font-size: 18px;
      width: 225px;
    }

    a {
      text-align: start;
    }

    span {
      cursor: pointer;
      text-align: end;
    }
  }
`;

export const LogoBadge = styled.img`
  alt: "Efood Logo";
  content: url(${logo});
  width: 126px;
  height: 57px;
`;
