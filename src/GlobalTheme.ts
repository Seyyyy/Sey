import { createMuiTheme } from '@material-ui/core'

const defaultTheme = createMuiTheme()

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
    htmlFontSize: 16,
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Arial',
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: 'Arial',
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
      },
    },
    h5: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
      },
    },
    h6: {
      fontFamily: 'Arial',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: 'Arial',
      fontWeight: 800,
      fontSize: '0.8rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    button: {
      fontFamily: 'Arial',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
})

export default theme
