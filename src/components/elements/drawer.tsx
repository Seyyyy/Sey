import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import theme from '../../GlobalTheme'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100vw',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  list: {
    padding: 0,
  },
  listItem: {
    justifyContent: 'center',
  },
})

const Menu = () => {
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
      <IconButton onClick={handleDrawerOpen}>
        <ExpandMore />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            button
            component={RouterLink}
            to="/"
          >
            {'Home'}
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            component={RouterLink}
            to="/about"
          >
            {'About'}
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            component={RouterLink}
            to="/work"
          >
            {'Work'}
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            component={RouterLink}
            to="/contact"
          >
            {'Contact'}
          </ListItem>
          <Divider />
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

export default Menu
