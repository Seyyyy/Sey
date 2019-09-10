import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import { Link as RouterLink} from "react-router-dom"

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        width: "100vw"
    },
    menuGrid: {
        display: "flex",
        justifyContent: "center",
        margin: 0
    },
    gridItem: {
        marginLeft: "4vw",
        marginRight: "4vw"
        // display: "flex",
        // justifyContent: "center"
    },
    menuText: {
        textAlign: "center",
        font: "Regular 25px/29px Arial",
        letterSpacing: "0.5px",
        color: "#FFFFFF",
        textTransform: "capitalize"
    },
    linkStyle: {
        textDecoration: "none"
    }
})

function Menu(){
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid className={classes.root}>
                <Grid container className={classes.menuGrid}>
                    <Grid item className={classes.gridItem}>
                        <RouterLink className={classes.linkStyle} to="/">
                            <p className={classes.menuText}>Home</p>
                        </RouterLink>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <RouterLink className={classes.linkStyle} to="/About">
                            <p className={classes.menuText}>About</p>
                        </RouterLink>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <RouterLink className={classes.linkStyle} to="/Illustration">
                            <p className={classes.menuText}>Illustration</p>
                        </RouterLink>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <RouterLink className={classes.linkStyle} to="/Animation">
                            <p className={classes.menuText}>Animation</p>
                        </RouterLink>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <a className={classes.linkStyle} href="https://twitter.com/eurekano">
                            <p className={classes.menuText}>Twitter</p>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Menu