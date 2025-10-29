import styled from "styled-components";
import { colors } from "../../app/style";

export const OrderConfirmationContainer = styled.div`
  box-sizing: border-box;
  max-width: 360px;
  width: 100%;
  overflow-y: scroll;
  padding: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.vermillion};
  gap: 16px;
  cursor: default;
  position: sticky;
  top: 16px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  h4 {
    font-weight: 700;
    font-size: 16px;
    color: ${colors.pale};
  }

  p {
    padding-bottom: 16px;
    font-size: 14px;
    color: ${colors.pale};
    line-height: 22px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.pale};
    border-width: 0px;
    height: 24px;

    font-weight: 700;
    font-size: 14px;
    color: ${colors.vermillion};
    width: 100%;
    cursor: pointer;
  }
`;
