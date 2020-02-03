import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import theme from '../GlobalTheme'
import CardList from './elements/cardList'
import apps from '../config/appList'

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
  subTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textTransform: 'uppercase',
    marginBottom: '80px',
  },
  heading: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
  },
  paragraph: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.fontSize,
  },
})

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.subTitle}>Work</Grid>
    </Grid>
  )
}

const Work = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle />
        <CardList list={apps} />
      </Grid>
    </React.Fragment>
  )
}

export default Work