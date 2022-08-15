import React from 'react'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Appbar from '~/components/Appbar'
import '../style/style.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default App
