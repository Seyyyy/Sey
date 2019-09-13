import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import { Link as RouterLink} from "react-router-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Drawer from './drawer'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        width: "100vw",
        zIndex: 1,
    },
    menuGrid: {
        display: "flex",
        justifyContent: "center",
        margin: 0,
        [theme.breakpoints.down("xs")]:{
            display: "none"
        }
    },
    gridItem: {
        marginLeft: "4vw",
        marginRight: "4vw",
        marginTop: "auto",
        marginBottom: "auto"
        // display: "flex",
        // justifyContent: "center"
    },
    menuText: {
        textAlign: "center",
        font: "Regular 25px/29px Arial",
        letterSpacing: "0.5px",
        color: "#FFFFFF",
        textTransform: "capitalize",
        textDecoration: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none"
    },
    activeMenuText: {
        textAlign: "center",
        font: "Regular 25px/29px Arial",
        letterSpacing: "0.5px",
        color: "#FFFFFF",
        textTransform: "capitalize",
        textDecoration: "line-through",
        pointerEvents: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none"
    },
    linkStyle: {
        textDecoration: "none"
    },
    drawer: {
        display: "none",
        [theme.breakpoints.down("xs")]:{
            display: "block"
        }
    }
})

function Menu(){
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid className={classes.root}>
                <Grid container className={classes.menuGrid}>
                    <Grid item className={classes.gridItem}>
                        <MenuLink label="Home" to="/" activeOnlyWhenExact={true}/>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <MenuLink label="About" to="/About" activeOnlyWhenExact={true}/>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <MenuLink label="Illustration" to="/Illustration" activeOnlyWhenExact={true}/>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <MenuLink label="Animation" to="/Animation" activeOnlyWhenExact={true}/>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <a className={classes.linkStyle} href="https://twitter.com/eurekano">
                            <p className={classes.menuText}>Twitter</p>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.drawer}>
                <Drawer />
            </Grid>
        </React.Fragment>
    )
}

type MenuLink = {
    label: string
    to: string
    activeOnlyWhenExact: boolean
}

const MenuLink: React.FC<MenuLink> = ({children, label, to, activeOnlyWhenExact}) =>{
    const classes = useStyles()

    return(
        <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <RouterLink 
            className={match ? classes.activeMenuText : classes.menuText} 
            to={to}
            >
                {label}
            </RouterLink>
        )}
      />
    )
}

export default Menu