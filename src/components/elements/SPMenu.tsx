import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import theme from '../../GlobalTheme'
import Hamburger from './Hamburger'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
  },
  expandMore: {
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  list: {
    padding: 0,
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
  },
  listItem: {
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
  listItemTitle: {
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  dialog: {
    zIndex: 1,
  },
  menu: {
    zIndex: 1400,
    position: 'absolute',
    top: '30px',
    left: '30px',
  },
})

const SPMenu = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.menu}>
        <Hamburger
          handleClick={handleDrawerOpen}
          handleClose={handleDrawerClose}
          transform={open}
        />
      </Grid>
      <Dialog className={classes.dialog} fullScreen={true} open={open}>
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/"
          >
            <Typography variant="subtitle2" className={classes.listItemTitle}>
              {'Home'}
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/about"
          >
            <Typography variant="subtitle2" className={classes.listItemTitle}>
              {' '}
              {'About'}
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/work"
          >
            <Typography variant="subtitle2" className={classes.listItemTitle}>
              {' '}
              {'Work'}
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/contact"
          >
            <Typography variant="subtitle2" className={classes.listItemTitle}>
              {' '}
              {'Contact'}
            </Typography>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default SPMenu
