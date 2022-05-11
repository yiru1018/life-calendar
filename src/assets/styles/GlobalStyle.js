import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Roboto,"Noto Sans TC",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
        box-sizing: border-box;
        outline: none; border: none;
        text-decoration: none;
    }

    html, body{
        width: 100%;
        height: 100%;
    }

`;

export default GlobalStyle;
