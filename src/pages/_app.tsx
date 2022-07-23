import GlobalStyles from '../styles/globals'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from './hooks/useUser'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
          <title>AngoProf</title>
        </Head>
        <GlobalStyles/>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
