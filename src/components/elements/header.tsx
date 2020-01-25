import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import theme from '../../GlobalTheme'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  gridItem: {
    marginLeft: '4vw',
    marginRight: '4vw',
    marginTop: '10px',
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
})

const Header = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Grid item className={classes.gridItem}>
          <RouterLink to="/" className={classes.link}>
            Home
          </RouterLink>
        </Grid>
        <Grid item className={classes.gridItem}>
          <RouterLink to="/about" className={classes.link}>
            About
          </RouterLink>
        </Grid>
        <Grid item className={classes.gridItem}>
          <RouterLink to="/work" className={classes.link}>
            Work
          </RouterLink>
        </Grid>
        <Grid item className={classes.gridItem}>
          <RouterLink to="/contact" className={classes.link}>
            Contact
          </RouterLink>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Header
