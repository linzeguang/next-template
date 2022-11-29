/**
 * @Author linzeguang
 * @Date 2022-11-18 12:11:35
 * @LastEditTime 2022-11-29 16:55:19
 * @LastEditors linzeguang
 * @Description
 */

import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
