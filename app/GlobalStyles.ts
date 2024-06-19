import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #EEE;
  }

  ::-webkit-scrollbar-thumb {
    background: darkred;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: red;
  }

  /* Firefox Scrollbar */
  body {
    scrollbar-color: red;
    scrollbar-width: thin;
  }
`;

export default GlobalStyle;
