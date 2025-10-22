import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  vermillion: "#E66767",
  pale: "#FFEBD9",
  cream: "#FFF8F2",
};

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


  body {
    color-scheme: light dark;
  font-family: system-ui;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0px;
  }

  #app{
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    position: relative
  }

  a{
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
  }
`;

export const SuspenseContainer = styled.div`
  background-color: ${colors.cream};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    font-weight: 900;
    font-size: 32px;
    color: ${colors.vermillion};
  }
`;

export default GlobalStyle;
