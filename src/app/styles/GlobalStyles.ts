import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url("/src/shared/assets/fonts/Lato/Lato-Regular.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-white: #ffffff;
    --color-blue: #007bff;
    --font-lato: "Lato", sans-serif;
    font-size: 16px;
  }

  body {
    font-family: var(--font-lato);
    font-weight: 400;
    font-style: normal;
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  button,
  a {
    font: inherit;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  .wrap {
    max-width: 48rem;
    margin-inline: auto;
  }

  .relative {
    position: relative;
  }
`;
