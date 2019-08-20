import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        position: "absolute",
        width: "auto",
        height: "30vh",
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

function LoadHome(){
    const classes = useStyles()

    return(
        <React.Fragment>
            <img className={classes.root} src="/static/icons/kyouryu_b.png" />
            {/* <h1>Loading now...</h1> */}
        </React.Fragment>
    )
}

export default LoadHome