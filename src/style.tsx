import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  vermillion: '#E66767',
  pale: '#FFEBD9',
  cream: '#FFF8F2'
}

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

  }

  a{
    text-decoration: none;
  }
`;

const AppFooter = styled.footer`
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
`

export default GlobalStyle;
