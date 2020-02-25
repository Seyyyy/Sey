import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import theme from '../GlobalTheme'
// import CardList from '../components/cardList'
import WorkList from '../components/WorkList'
import SubTitle from '../components/SubTitle'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: 'auto',
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container: {
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading: {
    color: theme.palette.primary.contrastText,
  },
  paragraph: {
    color: theme.palette.primary.contrastText,
    marginRight: '25px',
    marginLeft: '25px',
    marginBottom: '10px',
  },
})

const Work = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle title="Work" />
        <WorkList />
      </Grid>
    </React.Fragment>
  )
}

export default Work
