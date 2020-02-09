import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/elements/header'
import Menu from './components/elements/drawer'
import Home from './components/home'
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'
import Fade from './animations/fade'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './GlobalTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const RouteHome = () => {
  return (
    <Fade>
      <Home />
    </Fade>
  )
}

const RouteWork = () => {
  return (
    <Fade>
      <Work />
    </Fade>
  )
}

const RouteAbout = () => {
  return (
    <Fade>
      <About />
    </Fade>
  )
}

const RouteContact = () => {
  return (
    <Fade>
      <Contact />
    </Fade>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Menu />
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
