import React from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import Footer from '../components/Footer'
import Appbar from '@components/Appbar'
import '../style/style.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Script src={'/script/theme.js'} strategy="beforeInteractive" />
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default App
