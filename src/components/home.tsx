import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Toppage from './topPage'
import GlobalStyle from './../styles/globalStyle'
import Fadein from '../styles/fadein'
import Drawer from '../elements/drawer'
import Animation from '../components/Animation'
import Illustration from '../components/Illustration'
import NoMatch from '../components/noMatch'

function RouteToppage(){
  return <Fadein><Toppage /></Fadein>
}

function RouteAnimation(){
  return <Fadein><Animation /></Fadein>
}

function RouteIllustration(){
  return <Fadein><Illustration /></Fadein>
}

function Home() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Drawer />
        <Switch>
          <Route path="/" exact component={RouteToppage} />
          <Route path="/Animation" exact component={RouteAnimation} />
          <Route path="/Illustration" exact component={RouteIllustration} />
          <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>
  )
}

export default Home