import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Top from '../elements/top'

const styles = (theme: Theme) =>
createStyles({
    root:{
        backgroundColor: "#acacac",
        position: "relative",
        width: "100vw",
        height: "100vh",
        [theme.breakpoints.up('md')]: {
            width: "100vw",
            height: "100vh",
        }
    },
    home:{
        // backgroundColor: "#efefef",
        position: "relative",
        width: "100%",
        height: "400px",
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "830px",
        }
    },
    menu:{
        backgroundColor: "#111111",
        position: "absolute",
        width: "60vw",
        height: "80vh",
        top: "10%",
        left: "5%"
    },
    about:{
        backgroundColor: "#2a2a2c",
        position: "relative",
        width: "100%",
        height: "400px",
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "940px",
        }
    },
    animation:{
        backgroundColor: "#2a2a2c"
    },
    illustlation:{
        backgroundColor: "#2a2a2c",
        position: "relative",
        width: "100%",
        height: "400px",
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "940px",
        }
    }
})

function Menu(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <Grid className={classes.menu}></Grid>
            {/* <Grid className={classes.home}><Top /></Grid> */}
        </Grid>
    )
}

export default withStyles(styles)(Menu)