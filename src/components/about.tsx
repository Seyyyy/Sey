import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
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
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textTransform: 'uppercase',
    marginBottom: '80px',
  },
  heading: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
  },
  paragraph: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.fontSize,
  },
})

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.subTitle}>About</Grid>
    </Grid>
  )
}

const Heading = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.heading}>Sey</Grid>
    </Grid>
  )
}

const Paragraph = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <p className={classes.paragraph}>
        趣味 : Webフロント &amp; イラスト &amp; RPGゲーム &amp; Vtuber
      </p>
      <p className={classes.paragraph}>
        スキル : HTML CSS JavaScript Ruby RoR React Unity
      </p>
      <p className={classes.paragraph}>
        ゲーム : アトリエシリーズ(アーランド 黄昏 不思議シリーズプレイ済み)
      </p>
      <p className={classes.paragraph}>
        音楽 : ずっと真夜中でいいのに 相対性理論 アトリエシリーズサントラ
      </p>
      <p className={classes.paragraph}>
        Vtuber : 月ノ美兎 鈴鹿詩子 本間ひまわり 名取さな
      </p>
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
      </Grid>
    </React.Fragment>
  )
}

export default About
