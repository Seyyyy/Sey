import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link as RouterLink} from "react-router-dom"
import { createMuiTheme } from '@material-ui/core'

const theme =createMuiTheme()

const useStyles = makeStyles({
  list: {
    // width: 250
  },
  fullList: {
    width: "auto"
  },
  paperColor: {
    background: "transparent",
    boxShadow: "none"
  },
  styles: {
    position: "absolute",
    right: "5vw",
    top: "5vh",
    zIndex: 5,
    [theme.breakpoints.down("sm")]:{
        right: "3vw",
        top: "3vh"
    }
  },
  imgSize: {
    width: "50px",
    height: "50px",
    [theme.breakpoints.down("sm")]:{
        width: "30px",
        height: "auto"
    }
  },
  listFont: {
    fontSize: "25px",
    letterSpacing: "5px"
  },
  listBar: {
      width: "600px",
      height: "60px",
      backgroundColor: "#1a1a1a",
      color: "#eaeaea",
      marginTop: "10vh",
      [theme.breakpoints.down("sm")]:{
          width: "100vw",
          height: "auto"
      }
  },
  linkStyle: {
  }
})

export default function Drawers() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    left: false
  })

  type DrawerSide = "left";

  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  }

  const sideList = (side: DrawerSide) => (
    <div
      className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        {/* <div className={classes.listBar}>
            about
            </div> */}
      <List>
        <RouterLink className={classes.linkStyle} to="/">
            <ListItem className={classes.listBar} button key={"Home"}>
                <ListItemText className={classes.listFont} primary={"Home"} />
            </ListItem>
        </RouterLink>
        <RouterLink className={classes.linkStyle} to="/Animation">
            <ListItem className={classes.listBar} button key={"Animation"}>
                <ListItemText className={classes.listFont} primary={"Animation"} />
            </ListItem>
        </RouterLink>
        <RouterLink className={classes.linkStyle} to="/Illustration">
            <ListItem className={classes.listBar} button key={"Illustration"}>
                <ListItemText className={classes.listFont} primary={"Illustration"} />
            </ListItem>
        </RouterLink>
      </List>
    </div>
  )

  return (
    <div className={classes.styles}>
      <Button onClick={toggleDrawer("left", true)}>
          <img className={classes.imgSize} src="/static/icons/menu_w.png" />
      </Button>
      <Drawer PaperProps={{style: {background: "transparent", boxShadow: "none"}}} open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  )
}
