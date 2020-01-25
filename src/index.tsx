import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './GlobalTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
