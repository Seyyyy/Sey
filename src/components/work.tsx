import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import theme from '../GlobalTheme'
import CardList from './elements/cardList'
import works from '../config/workList'

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
    textTransform: 'uppercase',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
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

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="h4" className={classes.subTitle}>
        Work
      </Typography>
    </Grid>
  )
}

const Work = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle />
        <CardList list={works} />
      </Grid>
    </React.Fragment>
  )
}

export default Work
