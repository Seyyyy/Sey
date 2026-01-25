import React from 'react'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Appbar from '@components/Appbar'
import '../style/style.css'
import 'prismjs/themes/prism-okaidia.css'
import styles from './_app.module.css'
import { Fade } from '@components/Animation/Fade'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Fade>
        <div className={styles.root}>
          <Appbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Fade>
    </React.Fragment>
  )
}

export default App
