import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const styles = (theme: Theme) =>
createStyles({
    root:{
        // width: "30px",
        // display: "block",
        position: "absolute",
        bottom: "5%",
        right: "4%"
    },
    items:{
        justifyContent: "center",
        paddingBottom: "10px"
    }
})

function Sns(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <Grid className={classes.items}>
                <a href="https://twitter.com/eurekano">
                <img src="./static/icons/twitter-outline.png" width="30px" height="30px"/>
                </a>
            </Grid>
            <Grid className={classes.items}>
                <a href="https://github.com/shoshiro-furube">
                <img src="./static/icons/github-outline.png" width="30px" height="30px"/>
                </a>
            </Grid>
            <Grid className={classes.items}>
                <a href="https://www.facebook.com/shoshiro.furube">
                <img src="./static/icons/facebook-outline.png" width="30px" height="30px"/>
                </a>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Sns)