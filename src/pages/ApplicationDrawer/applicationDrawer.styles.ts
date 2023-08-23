import {createGlobalStyle} from "styled-components";
import {primaryColor, textColor} from "../../assets/styles/colors";

export const BaseStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    // for reset safarii settings
    margin: 0;
    width: calc(100vw - (100vw - 100%));
  }

  ul {
    // for reset safarii settings
    padding: 0
  }

  main {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 320px;
    background: ${primaryColor};
    color: ${textColor};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
