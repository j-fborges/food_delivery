import styled from "styled-components";
import { colors } from "../../app/style";

export const FooterContainer = styled.footer`
  background-color: ${colors.pale};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  min-height: 298px;

  div {
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 32px;

    img {
      height: 24px;
      width: 24px;
    }
  }

  p {
    font-size: 10px;
    font-weight: 400;
    max-width: 480px;
    text-align: center;
    color: ${colors.vermillion};
  }
`;
