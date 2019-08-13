import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Toppage from './topPage'
import Menu from './menu'
import GlobalStyle from './../styles/globalStyle'
import Drawer from './../elements/drawer'
import Fadein from '../styles/fadein'

function RouteToppage(){
  return <Fadein><Toppage /></Fadein>
}

function RouteMenu(){
  return <Fadein><Menu /></Fadein>
}

function Home() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Drawer />
          <Switch>
            <Route path="/" exact component={RouteToppage} />
            <Route path="/Menu" exact component={RouteMenu} />
          </Switch>
    </BrowserRouter>
  )
}

export default Home