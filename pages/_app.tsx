import '../styles/globals.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Script from 'next/script'

import store from '../Services/store'
import {Provider} from "react-redux"

import Main from './Default/main'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
    <Provider store={store}>
      <Main />

      <Component {...pageProps} />

      </Provider>
    </>

  )
}

export default MyApp
