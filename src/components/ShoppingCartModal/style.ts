import styled from "styled-components";
import { colors } from "../../app/style";

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
  }
`;
