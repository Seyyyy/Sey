import React from 'react'
import Grid from '@material-ui/core/Grid'
import KyoryuIcon from '@material-ui/core/SvgIcon'
import KyoryuSVG from '../../static/icons/kyoryu.svg'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../GlobalTheme'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    margin: '0 auto',
    width: '250px',
    height: '250px',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '160px',
    },
  },
  title: {
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '60px',
    fontWeight: 800,
    letterSpacing: '20px',
    textIndent: '20px',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      marginTop: '10px',
      marginBottom: '10px',
    },
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

const Home = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Kyoryu />
        <Grid className={classes.title}>Sey</Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home