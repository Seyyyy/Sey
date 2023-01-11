import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Sey</title>
        <meta property="og:site_name" content="Sey" />
        <meta property="og:url" content="https://seyyyy.com" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Sey's Portfolio" />
        {/* <meta property="og:image" content=" サムネイル画像の URL" /> */}
        <meta name="description" content="Sey's Portfolio" />
        <link
          rel="icon"
          href="/icons/fabicon.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icons/fabicon.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icons/fabicon.png"
          sizes="48x48"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icons/fabicon.png"
          sizes="62x62"
          type="image/png"
        />
        {/* <link rel="apple-touch-icon-precomposed" href="画像のURL" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <body>
          <noscript>
            <p>This page uses javascript. Please enable javascript.</p>
          </noscript>
          <Main />
          <NextScript />
          <Script src={'/script/theme.js'} strategy="beforeInteractive" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
