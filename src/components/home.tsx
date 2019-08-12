import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Toppage from './topPage'
import GlobalStyle from './../styles/globalStyle'

function RouteToppage(){
  return <Toppage />
}


function Home() {
  return (
    <BrowserRouter>
      <GlobalStyle />
          <Switch>
            <Route path="/" exact component={RouteToppage} />
          </Switch>
    </BrowserRouter>
  )
}

export default Home