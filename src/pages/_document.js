import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Abhay Chandra - Software Engineer" />
          <meta name="description" content="Hey there, This is Abhay Chandra. I am a Software Engineer at Xelpmoc Design And Tech Ltd." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Abhay Chandra - Software Engineer" />
          <meta property="og:description" content="Hey there, This is Abhay Chandra. I am a Software Engineer at Xelpmoc Design And Tech Ltd." />
          <meta property="og:image" content="https://res.cloudinary.com/dmxegonfd/image/upload/v1671001598/oie_VRfS8PRCGBCi_on9ukx.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Abhay Chandra - Software Engineer" />
          <meta property="twitter:description" content="Hey there, This is Abhay Chandra. I am a Software Engineer at Xelpmoc Design And Tech Ltd." />
          <meta property="twitter:image" content="https://res.cloudinary.com/dmxegonfd/image/upload/v1671001598/oie_VRfS8PRCGBCi_on9ukx.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
