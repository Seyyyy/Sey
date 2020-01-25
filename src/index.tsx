import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './globalTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const RouteHome = () => {
  return <Home />
}

const RouteWork = () => {
  return <Work />
}

const RouteAbout = () => {
  return <About />
}

const RouteContact = () => {
  return <Contact />
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact component={RouteHome} />
          <Route path="/work" exact component={RouteWork} />
          <Route path="/about" exact component={RouteAbout} />
          <Route path="/contact" exact component={RouteContact} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
