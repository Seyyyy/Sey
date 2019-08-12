import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Sns from './sns'

const styles = (theme: Theme) =>
createStyles({
    root:{

    },
    scroll:{
        position: "absolute",
        bottom: "2%",
        width: "100px",
        marginLeft: "40%"
    },
    sns:{
        // position: "absolute",
        // bottom: "3%",
        // right: "3%"
    }
})

function Top(props: WithStyles<typeof styles>){
    const {classes} = props

    return(
        <Grid className={classes.root}>
            <Sns/>
            {/* <Grid className={classes.scroll}>please scroll down</Grid> */}
        </Grid>
    )
}

export default withStyles(styles)(Top)