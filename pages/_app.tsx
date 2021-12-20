import '../styles/globals.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Script from 'next/script'

import store from '../store'
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      
    
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
        <title>For React</title>
        <Script type="text/javascript" src="../public/assets/js/bootstrap.bundle.min.js" />
        <Script type="text/javascript" src="../public/assets/js/app.js" />
      </Head>


      <Component {...pageProps} />

      </Provider>
    </>

  )
}

export default MyApp
