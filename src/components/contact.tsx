import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import theme from '../GlobalTheme'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

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
  textField: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
})

const SubTitle = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Typography variant="h4" className={classes.subTitle}>
        Contact
      </Typography>
    </Grid>
  )
}

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

type ContactValues = {
  name: string
  email: string
  message: string
}

const initialState = {
  name: '',
  email: '',
  message: '',
}

const MailForm = () => {
  const [values, setValues] = useState<ContactValues>(initialState)
  const [available, setAvailable] = useState<boolean>(true)
  const classes = useStyles()
  const clear = () => {
    setValues(initialState)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (process.env.MAIL_URL) {
        const body = JSON.stringify({
          text:
            '名前：' +
            values.name +
            '\n連絡先：' +
            values.email +
            '\nメッセージ：' +
            values.message,
        })
        const headers = { 'Content-Type': 'application/json' }
        const url: RequestInfo = process.env.MAIL_URL
        const option: RequestInit = {
          method: 'POST',
          mode: 'no-cors',
          headers,
          body,
        }
        await fetch(url, option)
        setAvailable(true)
      } else {
        console.log('submit mail')
        console.log(JSON.stringify(values))
        console.log(process.env.MAIL_URL)
      }
      clear()
    } catch (error) {}
  }

  const handleKeyDown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.id === 'name') {
      setValues({
        name: e.target.value,
        email: values.email,
        message: values.message,
      })
    } else if (e.target.id === 'email') {
      setValues({
        name: values.name,
        email: e.target.value,
        message: values.message,
      })
    } else if (e.target.id === 'message') {
      setValues({
        name: values.name,
        email: values.email,
        message: e.target.value,
      })
    }
    toggleAvailable(values)
  }

  const toggleAvailable = (values: ContactValues) => {
    if (
      values.name.length > 0 &&
      values.email.length > 0 &&
      values.message.length > 9
    ) {
      setAvailable(false)
    }
  }

  return (
    <Grid className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Grid className={classes.container}>
          <TextField
            id="name"
            onChange={handleKeyDown}
            className={classes.textField}
            variant="filled"
            label="Name"
            value={values.name}
          ></TextField>
        </Grid>
        <Grid className={classes.container}>
          <TextField
            id="email"
            onChange={handleKeyDown}
            className={classes.textField}
            variant="filled"
            label="Email or TwitterID"
            value={values.email}
          />
        </Grid>
        <Grid className={classes.container}>
          <TextField
            id="message"
            onChange={handleKeyDown}
            className={classes.textField}
            variant="filled"
            label="Message(More than 10 words)"
            multiline
            rows="10"
            value={values.message}
          />
        </Grid>
        <Input type="submit" value="SUBMIT" disabled={available} />
      </form>
    </Grid>
  )
}

const Contact = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <SubTitle />
        <Paragraph />
        <MailForm />
      </Grid>
    </React.Fragment>
  )
}

export default Contact
