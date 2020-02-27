import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Work from './pages/work'
import About from './pages/about'
import Contact from './pages/contact'
import Illustration from './pages/Illustration'
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

const RouteIllustration = () => {
  return (
    <Fade>
      <Illustration />
    </Fade>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={RouteHome} />
          <Route path="/work" exact component={RouteWork} />
          <Route path="/about" exact component={RouteAbout} />
          <Route path="/contact" exact component={RouteContact} />
          <Route path="/illustration" exact component={RouteIllustration} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
