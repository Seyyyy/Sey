import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '~/globalTheme'
import Home from './pages/home'
import Profile from './pages/profile'
import Top from './pages/components/top'

const App = () => {
  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
