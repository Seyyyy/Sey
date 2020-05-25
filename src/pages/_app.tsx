import React from 'react'
import {AppProps} from 'next/app'
import {GlobalStyle} from '../style/style'
import Top from '../components/top'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Top />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App