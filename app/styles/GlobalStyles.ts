import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #000;
    --secondary-color: #fff;
    --item-color: #ec1d24;
    --gray-color: #aaa;
    --text-color-primary: #000;
    --text-color-secondary: #fff;
    --font-family: "Roboto Condensed", Roboto, Arial, sans-serif;

    --font-size-small: 12px;
    --font-size-mid: 14px;
    --font-size-big: 16px;
    --font-size-title-small: 32px;
    --font-size-title-big: 40px;

    --line-height-small: 14px;
    --line-height-mid: 16px;
    --line-height-big: 19px;
    --line-height-title-small: 38px;
    --line-height-title-big: 47px;
    
    --font-weight1: 400;
    --font-weight2: 500;
    --font-weight3: 600;
    --font-weight4: 700;

    --border-radius: 4px;

    --space-neg-18: -18px;
    --space-neg-9: -9px;
    --space-8: 8px;
    --space-10: 10px;
    --space-12: 12px;
    --space-13: 13px;
    --space-14: 14px;
    --space-15: 15px;
    --space-16: 16px;
    --space-18: 18px;
    --space-20: 20px;
    --space-24: 24px;
    --space-36: 36px;
    --space-48: 48px;

    --rotate-45: 45deg;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    h1 {
      margin: 0;
      font-size: var(--font-size-title-big);
      font-weight: var(--font-weight4);
      line-height: var(--line-height-title-big);  

      @media (max-width: 768px) {
        font-size: var(--font-size-title-small);
        line-height: var(--line-height-title-small);
      }
    }
    h3 {
      margin: 0;
      font-size:  var(--font-size-big);
      font-weight: var(--font-weight2);
      line-height: var(--line-height-big);
    }
    p {
      margin: 0;
      font-size:  var(--font-size-big);
      font-weight: var(--font-weight1);
      line-height: var(--line-height-big);
    }
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
    border-radius:var(--border-radius);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--item-color);
  }

  /* Firefox Scrollbar */
  body {
    scrollbar-color: var(--item-color);
    scrollbar-width: thin;
  }
`;

export default GlobalStyle;
