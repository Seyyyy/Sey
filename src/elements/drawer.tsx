import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link as RouterLink} from "react-router-dom"
import { createMuiTheme } from '@material-ui/core'

const theme =createMuiTheme()

const useStyles = makeStyles({
  list: {
    marginTop: "10vh"
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
    zIndex: 1,
    [theme.breakpoints.down("xs")]:{
        right: "3vw",
        top: "3vh"
    }
  },
  imgSize: {
    width: "50px",
    height: "50px",
    [theme.breakpoints.down("xs")]:{
        width: "30px",
        height: "auto"
    }
  },
  listFont: {
    fontSize: "Regular 25px/29px Arial",
    letterSpacing: "0.5px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    textDecoration: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  listBar: {
      width: "600px",
      height: "60px",
      backgroundColor: "#00000000",
      color: "#eaeaea",
      marginTop: "2vh",
      [theme.breakpoints.down("sm")]:{
          width: "70vw",
          height: "auto"
      }
  },
  linkStyle: {
    textDecoration: "none",
  },
  divider: {
    backgroundColor: "#ffffff88"
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
        <Divider className={classes.divider} />
        <RouterLink className={classes.linkStyle} to="/About">
            <ListItem className={classes.listBar} button key={"About"}>
                <ListItemText className={classes.listFont} primary={"About"} />
            </ListItem>
        </RouterLink>
        <Divider className={classes.divider} />
        <RouterLink className={classes.linkStyle} to="/Illustration">
            <ListItem className={classes.listBar} button key={"Illustration"}>
                <ListItemText className={classes.listFont} primary={"Illustration"} />
            </ListItem>
        </RouterLink>
        <Divider className={classes.divider} />
        <RouterLink className={classes.linkStyle} to="/Animation">
            <ListItem className={classes.listBar} button key={"Animation"}>
                <ListItemText className={classes.listFont} primary={"Animation"} />
            </ListItem>
        </RouterLink>
        <Divider className={classes.divider} />
        {/* <RouterLink className={classes.linkStyle} to="/Animation"> */}
            <ListItem className={classes.listBar} button key={"twitter"}>
              <a className={classes.linkStyle} href="https://twitter.com/eurekano">
                <ListItemText className={classes.listFont} primary={"Twitter"} />
              </a>
            </ListItem>
        {/* </RouterLink> */}
      </List>
    </div>
  )

  return (
    <div className={classes.styles}>
      <Button onClick={toggleDrawer("left", true)}>
          <img className={classes.imgSize} src="/static/icons/menu_w.png" />
      </Button>
      <Drawer PaperProps={{style: {backgroundColor: "#00000055"}}} open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  )
}
