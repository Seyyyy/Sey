import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import theme from '../GlobalTheme'
import Typography from '@material-ui/core/Typography'
import SubTitle from '../components/SubTitle'
import MailForm from '../components/MailForm'

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
  paragraph: {
    color: theme.palette.primary.contrastText,
    marginRight: '25px',
    marginLeft: '25px',
    marginBottom: '10px',
  },
})

const Paragraph = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="body1" className={classes.paragraph}>
        ・サークルやコミュニティなどへのお誘いは大歓迎です！(喜びます)
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        ・TwitterでDMくださっても大丈夫です！
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        ・お仕事やご依頼はお受けしてません。(まだ自信がない、、)
      </Typography>
    </Grid>
  )
}

const Contact = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle title="Contact" />
        <Paragraph />
        <MailForm />
      </Grid>
    </React.Fragment>
  )
}

export default Contact
