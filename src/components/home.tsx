import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Toppage from './topPage'
import GlobalStyle from './../styles/globalStyle'
import Fadein from '../styles/fadein'
import Animation from '../components/Animation'
import Illustration from '../components/Illustration'
import About from '../components/About'
import NoMatch from '../components/noMatch'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '../elements/menu'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  menu: {
    position: "absolute",
    bottom: "2vh",
    zIndex: 2
  }
})

function RouteToppage(){
  return <Fadein><Toppage /></Fadein>
}

function RouteAbout(){
  return <Fadein><About /></Fadein>
}

function RouteAnimation(){
  return <Fadein><Animation /></Fadein>
}

function RouteIllustration(){
  return <Fadein><Illustration /></Fadein>
}

function Home() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div id="globalStyle" />
        <Switch>
          <Route path="/" exact component={RouteToppage} />
          <Route path="/Animation" exact component={RouteAnimation} />
          <Route path="/Illustration" exact component={RouteIllustration} />
          <Route path="/About" exact component={RouteAbout} />
          <Route component={NoMatch} />
        </Switch>
        <Grid className={classes.menu}>
          <Menu />
        </Grid>
    </BrowserRouter>
  )
}

export default Home