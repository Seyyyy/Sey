import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import configs from '../config/configsAnimation'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom: "20vh"
  },
  gridRoot: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]:{
      marginRight: "5%",
      marginLeft: "5%"
    }
  }
})

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <React.Fragment>
        <Grid container spacing={0} className={classes.gridRoot}>
        {configs.map((obj)=>(
            <Grid item md={4} sm={12} className={classes.gridItem}>
                <Card className={classes.card}>
                <CardActionArea>
                  <a href={obj.ref}>
                      <CardMedia
                      component="img"
                      alt={obj.alt}
                      height="200"
                      image={obj.img}
                      title={obj.title}
                      />
                  </a>
                </CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {obj.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {obj.description}
                </Typography>
                </CardContent>
                </Card>
            </Grid>
        ))}
        </Grid>
    </React.Fragment>
  )
}