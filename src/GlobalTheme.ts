import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#eceff1',
      dark: '#babdbe',
      contrastText: '#263238',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#eceff1',
    },
    background: {
      paper: '#eceff1',
      default: '#eceff1',
    },
  },
  typography: {
    fontFamily: 'arial',
  },
})

export default theme
