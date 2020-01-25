import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const Home = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}></Grid>
    </React.Fragment>
  )
}

export default Home
