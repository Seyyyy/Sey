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
