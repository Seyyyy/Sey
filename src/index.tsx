import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Work from './components/work'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './globalTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const RouteHome = () => {
  return <Home />
}

const RouteWork = () => {
  return <Work />
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact component={RouteHome} />
          <Route path="/work" exact component={RouteWork} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
