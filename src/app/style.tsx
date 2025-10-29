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

export const FormContainer = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .input-row {
      display: flex;
      flex-direction: row;
      gap: 34px;
    }

    .form-buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;

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
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.pale};
  }

  input {
    padding: 8px;
    width: 100%;
    height: 32px;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    background-color: ${colors.pale};
    border-width: 0px;
  }

  span {
    font-size: 10px;
    color: ${colors.cream};
    font-weight: 700;
  }
`;

export default GlobalStyle;
