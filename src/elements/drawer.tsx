import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Link, { LinkProps } from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

interface ToLinkProps extends LinkProps {
    to: string
}

const ToLink = (props: ToLinkProps) => <Link {...props} component={RouterLink as any} />

const styles = (theme: Theme) =>
createStyles({
    root: {
        position: "absolute",
        top: "5%",
        right: "4%",
        zIndex: 4
    }
})

function Drawer(props: WithStyles<typeof styles>){
    const {classes} = props
    
    return(
        <React.Fragment>
            <Grid className={classes.root}>
                <ToLink to="/Menu">
                    <img src="./../../static/icons/menu.svg" width="50px" height="50px" />
                </ToLink>
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(Drawer)