import React from 'react'
import Grid from '@material-ui/core/Grid'
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
  title: {
    margin: '0 auto',
    marginTop: '30px',
    fontSize: '100px',
    letterSpacing: '20px',
    textIndent: '20px',
    color: theme.palette.primary.contrastText,
  },
  logo: {
    margin: '0 auto',
    // backgroundImage: 'url("images/kpt_logo.svg")',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',
    // backgroundPosition: 'center',
    width: '30vw',
    height: '30vh',
    color: theme.palette.primary.contrastText,
  },
})

const Home = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <KyoryuIcon
          className={classes.logo}
          component={KyoryuSVG}
          viewBox={'0 0 94.89 76.39'}
        />{' '}
        {/* svgアイコンのviewboxと同値に設定 */}
        <Grid className={classes.title}>Sey</Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home
