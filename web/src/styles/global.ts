import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        --background: #0D0E1E;
        --white: #ffffff;
        --grey: #dddddd;
        --red: #fc0a0a;
        --black: #000000;
        --linear_blue: linear-gradient(90deg, #000639 0%, rgba(43, 0, 69, 0.65) 100%);
    }

    @media (min-width: 2000px) {
        html {
            font-size: 115%;
        }
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--white);
    }

    body, input, textarea, select, button {
        font: 400 1rem "Poppins", "sans-serif";
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
