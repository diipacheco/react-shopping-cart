import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }
  html {
    background: var(--background);
  }
  :root {
    --white: #FFFFFF;
    --brown: #47250E;
    --light-brown: #786050;
    --orange: #F78131;
    --dark-orange: #C46627;
    --background: #E6CAA7;
    --grey: ##767677;
  }
`;
