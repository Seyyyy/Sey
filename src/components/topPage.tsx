import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
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
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "250px",
        height: "431px",
        [theme.breakpoints.down('xs')]:{
            width: "150px",
            height: "auto"
        }
    },
    imgSize: {
        width: "100%"
    },
    titleText: {
        textAlign: "center",
        font: "Bold 70px Gill Sans",
        letterSpacing: "1.8px",
        color: "#FFFFFF",
        textTransform: "capitalize"
    },
    Menu: {
        position: "absolute",
        bottom: "2vh"
    }
})

function Home(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <Grid className={classes.title}>
                <img className={classes.imgSize} src="/static/icons/kyoryu_w.svg"/>
                <p className={classes.titleText}>Sey</p>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Home)