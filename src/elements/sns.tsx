import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: "5%",
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    items: {
        [theme.breakpoints.up("sm")]:{
            paddingRight: "40px",
            paddingLeft: "40px"
        },
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    iconSize:{
        [theme.breakpoints.up("sm")]:{
            width: "55px"
        },
        width: "45px",
        height: "auto"
    }
})

function Sns(){
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid className={classes.root}>
                <Grid className={classes.items}>
                    <a href="https://twitter.com/eurekano">
                    <img src="/static/icons/twitter_logo.png" className={classes.iconSize}/>
                    </a>
                </Grid>
                <Grid className={classes.items}>
                    <a href="https://github.com/shoshiro-furube">
                    <img src="/static/icons/github_logo.png" className={classes.iconSize}/>
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Sns