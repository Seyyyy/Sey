import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-image: url("/static/img/image.png");
    background-position: center center;
    background-color: #acacac;
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