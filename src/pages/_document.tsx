import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components'

type Props = {
  styleTags: any;
}

class MyDocument extends Document<Props> {

  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        {this.props.styleTags}
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Sey</title>
        <meta name="description" content="Sey's Portfolio" />
        <meta property="og:url" content="https://seyyyy.com" />
        <meta property="og:title" content="Sey" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Sey's Portfolio" />
        {/* <meta property="og:image" content=" サムネイル画像の URL" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@seyyyysaid" />
        <meta property="og:site_name" content="Sey" />
        <link rel="icon" href="/icons/fabicon.png" sizes="16x16" type="image/png" /> 
        <link rel="icon" href="/icons/fabicon.png" sizes="32x32" type="image/png" />  
        <link rel="icon" href="/icons/fabicon.png" sizes="48x48" type="image/png" /> 
        <link rel="icon" href="/icons/fabicon.png" sizes="62x62" type="image/png" />
        {/* <link rel="apple-touch-icon-precomposed" href="画像のURL" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <body>
            <noscript>
                <p>This page uses javascript. Please enable javascript.</p>
            </noscript>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument