import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import KyoryuIcon from '@material-ui/core/SvgIcon'
import KyoryuSVG from '../../static/icons/kyoryu.svg'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../GlobalTheme'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    margin: '0 auto',
    width: '30vw',
    height: '30vh',
    color: theme.palette.primary.contrastText,
  },
  title: {
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '100px',
    letterSpacing: '20px',
    textIndent: '20px',
    color: theme.palette.primary.contrastText,
  },
  link: {
    margin: '0 auto',
    textDecoration: 'none',
  },
  button: {
    color: theme.palette.primary.main,
    size: 'large',
    backgroundColor: theme.palette.primary.contrastText,
  },
})

const Kyoryu = () => {
  const classes = useStyles()
  return (
    <KyoryuIcon
      className={classes.logo}
      component={KyoryuSVG}
      viewBox={'0 0 94.89 76.39'}
    />
    /* svgアイコンのviewboxと同値に設定 */
  )
}

const Work = () => {
  const classes = useStyles()
  return (
    <RouterLink className={classes.link} to="/work">
      <Fab className={classes.button} variant={'extended'}>
        work
      </Fab>
    </RouterLink>
  )
}

const Home = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Kyoryu />
        <Grid className={classes.title}>Sey</Grid>
        <Work />
        <Grid></Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home
