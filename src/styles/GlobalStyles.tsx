import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 1rem;
    color: #2C2C2C;
    overflow-x: hidden;
    background-color: #f9f9f9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    height: auto;
    width: auto;
    max-width: 100%;
  }

  button,
  input {
    display: block;
  }

  a {
    text-decoration: none;
    color: #2C2C2C;
  }
`;
