import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Sns from '../elements/sns'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const styles = (theme: Theme) =>
createStyles({
    root:{
        zIndex: 1,
        position: "relative",
        width: "100vw",
        height: "100vh",
    },
    title: {
        position: "absolute",
        width: "auto",
        height: "50vh",
        [theme.breakpoints.down("sm")]:{
            height: "43vh"
        },
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto"
    }
})

function Home(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <img className={classes.title} src="/static/icons/title.png"/>
            <Grid>
                <Sns />
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Home)