import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, Roboto, sans-serif, serif;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
