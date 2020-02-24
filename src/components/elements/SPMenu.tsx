import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import theme from '../../GlobalTheme'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100vw',
    zIndex: 1,
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
      <AppBar>
        <ButtonBase className={classes.expandMore} onClick={handleDrawerOpen}>
          <ExpandMore />
        </ButtonBase>
      </AppBar>
      <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
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
          <Divider className={classes.divider} />
          <ListItem
            className={classes.listItem}
            button
            onClick={handleDrawerClose}
          >
            <ExpandLess />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SPMenu
