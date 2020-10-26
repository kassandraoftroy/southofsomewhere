import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap')
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: courier;
  }

  body.fontLoaded {
    font-family: 'Courier Prime', monospace;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
