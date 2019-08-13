import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Top from '../elements/top'
import { url } from 'inspector';

const styles = (theme: Theme) =>
createStyles({
    root:{
        backgroundImage: "url(../../static/img/psyche.png)",
        backgroundSize: "cover",
        backgroundColor: "#AAAAAA",
        position: "relative",
        width: "100%",
        height: "100%",
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "100%",
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
    illustlation:{
        backgroundColor: "#efefef",
        position: "relative",
        width: "100%",
        height: "400px",
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "940px",
        }
    }
})

function Home(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <Grid className={classes.home}><Top /></Grid>
            {/* <Grid className={classes.about}></Grid> */}
            {/* <Grid className={classes.illustlation}></Grid> */}
        </Grid>
    )
}

export default withStyles(styles)(Home)