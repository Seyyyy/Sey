import React from 'react'
import {AppProps} from 'next/app'
import '../style/style.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App