import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../elements/cardAnimation'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root :{
        position: "absolute",
        width: "100vw",
        height: "auto",
        paddingTop: "10vh"
    },
    title:{
        position: "relative",
        width: "100vw",
        height: "auto",
        textAlign: "center",
        marginTop: "5vh",
        marginBottom: "5vh"
    },
    main: {
        position: "relative",
        marginTop: "20vh"
    }
})

function Animation(){
    const classes = useStyles()

    return (
        <React.Fragment>
                <Grid className={classes.root}>
                    <Grid className={classes.main}>
                        <Card />
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

export default Animation