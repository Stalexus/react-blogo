import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', 'sans-serif';
    outline:0;
  }
  #root{
    margin:0 auto;
  }
`