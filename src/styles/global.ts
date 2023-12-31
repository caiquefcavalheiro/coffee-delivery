import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
}

:focus{
    outline:0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["brand-yellow-light"]}
}


body{
    background: ${(props) => props.theme["base-background"]}
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
}

`;
