import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import theme from '../../GlobalTheme'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      marginRight: '5%',
      marginLeft: '5%',
    },
  },
  card: {
    maxWidth: 345,
    marginBottom: '20vh',
  },
})

type CardAttribute = {
  img: string
  alt: string
  title: string
  description: string
  ref: string
}
type CardList = {
  list: CardAttribute[]
}

const CardList: React.FC<CardList> = ({ list }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={0} className={classes.root}>
      {list.map(obj => (
        <Grid item key={obj.ref} md={4} sm={12} className={classes.gridItem}>
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
  )
}

export default CardList
