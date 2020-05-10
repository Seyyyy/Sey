import { createGlobalStyle } from 'styled-components'

export const palette = {
  MAIN: {
    ORIGINAL: '#263238',
    DARK: '',
    LIGHT: '',
  },
  BASE: {
    ORIGINAL: '#ECEFF1',
    DARK: '#DADDDE',
    LIGHT: '',
  },
  ACCENT: {
    ORIGINAL: '#928C82',
    DARK: '',
    LIGHT: '',
  },
}

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 16px;
  }
  body{
    margin: 0;
    background-color: ${palette.BASE.ORIGINAL};
  }
  p{
    font-family: 'Arial';
    font-size: 1rem;
    color: ${palette.MAIN.ORIGINAL};
    word-wrap: break-word;
  }
  h1{
    font-family: 'Arial';
    font-size: 2rem;
    color: ${palette.MAIN.ORIGINAL};
  }
  button{
    background-color: ${palette.MAIN.ORIGINAL};
    color: ${palette.BASE.ORIGINAL};
    cursor: pointer;
    border-style: none;
    box-shadow: 2px 3px 6px 1px rgba(0,0,0,0.4);
    :focus{
      outline: none;
    }
    :active{
      opacity: 0.8; /*もっとリッチなエフェクト無いかな？ */
    }
  }
  img{
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }
  table{
    border: none;
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-family: 'Arial';
    color: ${palette.MAIN.ORIGINAL};
    tr {
      width: auto;
      height: 5vh;
    }
    tr:nth-child(odd) td {
      background-color: ${palette.BASE.DARK};
    }
    td {
      background-color: ${palette.BASE.ORIGINAL};
      padding-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`
