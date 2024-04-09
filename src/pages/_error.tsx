import React from 'react'
import { NextPage } from 'next'
import { ErrorProps } from 'next/error'
import styles from './_error.module.css'

const ErrorPage: NextPage<ErrorProps> = () => {
  return (
    <div className={styles.root}>
      <p>This Page is not found.</p>
    </div>
  )
}

export default ErrorPage
