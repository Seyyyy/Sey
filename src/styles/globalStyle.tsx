import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000000;
    background: linear-gradient(
      #272727EE 0%,
      #272727AA 20%,
      #27272722 50%,
      #27272766 70%,
      #111111AA 100%
      ),
    url("/static/img/sky.jpg");
    background-position: center center;
    background-color: #000000;
    background-size: cover;
    background-attachment: fixed;
  }
  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
  }
`

export default GlobalStyle