import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../elements/cardIllustration'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.6)",
        width: "100vw",
        height: "auto",
        minHeight: "100vh"
    },
    title:{
        position: "relative",
        width: "100vw",
        height: "auto",
        textAlign: "center",
        marginTop: "5vh",
        marginBottom: "5vh"
    },
    a: {
        fontFamily: "Arial",
        fontSize: "70px",
        fontWeight: "bold",
        color: "#eeeeee",
        [theme.breakpoints.down("sm")]:{
            fontSize: "40px"   
        }
    },
    main: {
        position: "relative",
        marginTop: "20vh"
    }
})

function Illustration(){
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid className={classes.root}>
                <Grid className={classes.title}>
                    <a className={classes.a}>Illustration</a>
                </Grid>
                <Grid className={classes.main}>
                    <Card />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Illustration