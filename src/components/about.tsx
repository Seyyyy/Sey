import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import { Twitter, GitHub } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import theme from '../GlobalTheme'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: 'auto',
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container: {
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  subTitle: {
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
  heading: {
    color: theme.palette.primary.contrastText,
  },
  paragraph: {
    color: theme.palette.primary.contrastText,
    marginRight: '25px',
    marginLeft: '25px',
    marginBottom: '10px',
  },
  icon: {
    color: theme.palette.primary.contrastText,
    fontSize: 24,
    marginRight: '10px',
    marginLeft: '10px',
  },
})

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="h4" className={classes.subTitle}>
        About
      </Typography>
    </Grid>
  )
}

const Heading = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Sey
      </Typography>
    </Grid>
  )
}

const Paragraph = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="body1" className={classes.paragraph}>
        趣味 : Webフロント/バック &amp; イラスト &amp; RPGゲーム &amp; Vtuber
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        スキル : HTML CSS JavaScript Ruby RoR React Unity
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        ゲーム : アトリエシリーズ(アーランド 黄昏 不思議シリーズプレイ済み)
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        音楽 : ずっと真夜中でいいのに 相対性理論 アトリエシリーズサントラ
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Vtuber : 月ノ美兎 鈴鹿詩子 本間ひまわり 名取さな
      </Typography>
    </Grid>
  )
}

const SNS = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Link className={classes.icon} href="https://twitter.com/eurekano">
        <Twitter />
      </Link>
      <Link className={classes.icon} href="https://github.com/Seyyyy">
        <GitHub />
      </Link>
    </Grid>
  )
}

const About = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle />
        <Heading />
        <Paragraph />
        <SNS />
      </Grid>
    </React.Fragment>
  )
}

export default About
