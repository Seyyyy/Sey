import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import theme from '../GlobalTheme'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  textField: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
})

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

const textFieldProps = {
  style: {
    fontSize: 16,
  },
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
      }
      clear()
    } catch (error) {}
  }

  const toggleAvailable = (values: ContactValues) => {
    if (
      values.name.length > 0 &&
      values.email.length > 0 &&
      values.message.length > 9
    ) {
      setAvailable(false)
    } else {
      setAvailable(true)
    }
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
            inputProps={textFieldProps}
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
            inputProps={textFieldProps}
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
            inputProps={textFieldProps}
          />
        </Grid>
        <Input type="submit" value="SUBMIT" disabled={available} />
      </form>
    </Grid>
  )
}

export default MailForm
