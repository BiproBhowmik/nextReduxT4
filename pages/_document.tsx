import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
      <meta charSet="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
        <title>For React</title>
        {/* <Script type="text/javascript" src="../public/assets/js/bootstrap.bundle.min.js" />
        <Script type="text/javascript" src="../public/assets/js/app.js" /> */}
      </Head>
        <body>
          <Main />
          <NextScript />

          <Script type="text/javascript" src="../public/assets/js/bootstrap.bundle.min.js" />
          <Script type="text/javascript" src="../public/assets/js/app.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument