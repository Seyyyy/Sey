import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
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
  textField: {
    width: '400px',
    // backgroundColor: theme.palette.primary.dark
  },
})

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.subTitle}>Contact</Grid>
    </Grid>
  )
}

const MailForm = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.container}>
        <TextField
          className={classes.textField}
          variant="filled"
          label="Name"
        />
      </Grid>
      <Grid className={classes.container}>
        <TextField
          className={classes.textField}
          variant="filled"
          label="Your Email Address"
        />
      </Grid>
      <Grid className={classes.container}>
        <TextField
          className={classes.textField}
          variant="filled"
          label="Message"
          multiline
          rows="10"
        />
      </Grid>
    </Grid>
  )
}

const Contact = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle />
        <MailForm />
      </Grid>
    </React.Fragment>
  )
}

export default Contact
