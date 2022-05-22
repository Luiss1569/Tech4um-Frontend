import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body, #root {
        background: (props) => props.theme.colors.background;
    }
    
    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    h2 {
        font-size: 1.7rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: (${(props) => props.theme.colors.textSecondary});
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    h5 {
        font-size: 1rem;
        font-weight: 700;
        color: (${(props) => props.theme.colors.textSecondary});
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    h6 {
        font-size: 0.8rem;
        font-weight: 700;
        color: (${(props) => props.theme.colors.textSecondary});
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    span {
        font-size: 0.8rem;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    p{
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    a {
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme.colors.background};
        font-family: 'Poppins', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }

    // Media Queries for responsive font design 
    @media (min-width: 1920px) {
        html{
            max-width: 1920px;
            margin: 0 auto;
            font-size: 100%;
        }
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75% !important;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.15% !important;
        }
    }

    @media(max-width: 600px) {
        html {
            font-size: 85.71% !important;
        }
    }

    @media(max-width: 480px) {
        html {
            font-size: 83.33% !important;
        }
    }

    @media(max-width: 360px) {
        html {
            font-size: 80.00% !important;
        }
    }
`;

export default GlobalStyle;
