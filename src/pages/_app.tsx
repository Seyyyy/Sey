import React from 'react'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Appbar from '@components/Appbar'
import '../style/style.css'
import { Fade } from '@components/Animation/Fade'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Fade>
        <Appbar />
        <Component {...pageProps} />
        <Footer />
      </Fade>
    </React.Fragment>
  )
}

export default App
