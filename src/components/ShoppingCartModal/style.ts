import styled from "styled-components";
import { ModalBackdrop } from "../DishModal/style";
import { colors } from "../../app/style";
import trashIcon from "url:../../assets/trashIcon.png";

export const CartBackdrop = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 0%;
  cursor: pointer;

  > div {
    box-sizing: border-box;
    max-width: 360px;
    width: 100%;
    height: 100%;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.vermillion};
    gap: 40px;
    cursor: default;
    position: relative;

    > div {
      box-sizing: border-box;
      max-width: 360px;
      width: 100%;
      overflow-y: scroll;
      padding: 0px;
      display: flex;
      flex-direction: column;
      background-color: ${colors.vermillion};
      gap: 40px;
      cursor: default;
      position: sticky;
      top: 16px;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none; /* Older Safari and Chromium */
      }

      .shopping-cart-items {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .shopping-cart-footer {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 16px;

        > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          span {
            font-weight: 700;
            font-size: 14px;
            color: ${colors.pale};
          }
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${colors.pale};
          border-width: 0px;

          font-weight: 700;
          font-size: 14px;
          color: ${colors.vermillion};
          width: 100%;
        }
      }
    }
  }
`;

export const CartItem = styled.div`
  margin: 0px;
  .cart-item {
    position:relative;
    max-width: 344px;
    width: 100%;
    padding: 8px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    max-height: 100px;
    background-color: ${colors.pale};
    z-index: 6;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      position: relative;
      z-index: 6;

      .dish-title {
        font-weight: 900;
        color: ${colors.vermillion};
        font-size: 18px;
        width: fit-content;
      }

      .dish-price {
        width: fit-content;
        font-weight: 14px;
        color: ${colors.vermillion};
        position: relative;
        z-index: 8;
      }

      & > div {
        z-index: 7;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        align-items: flex-end;

        button {
          position: absolute;
          z-index: 7;
          background-color: ${colors.pale};
          width: 16px;
          height: 16px;
          border-width: 0px;
          background-image: url(${trashIcon});
          background-size: cover;
          cursor: pointer;
          bottom: 0
        }
      }
    }
  }
`;
