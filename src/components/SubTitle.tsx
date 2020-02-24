import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import theme from '../GlobalTheme'

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  titleStyles: {
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
})

type SubTitleProps = {
  title: string
}

const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <Typography variant="h4" className={classes.titleStyles}>
        {title}
      </Typography>
    </Grid>
  )
}

export default SubTitle
