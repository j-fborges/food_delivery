import styled from "styled-components";
import { colors } from "../../style";
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

export const LogoBadge = styled.img`
  alt: "Efood Logo";
  content: url(${logo});
  width: 126px;
  height: 57px;
`