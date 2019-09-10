import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    // background-image: url("/static/img/home.jpg");
    background: linear-gradient(
      #5454541C 0%, 
      #4747473F 31%, 
      #212121A5 66%, 
      #131313CC 88%, 
      #000000 100%
      ),
    url("/static/img/home.jpg");
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