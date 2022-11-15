import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session} >
      <Head>
        <title>Twitch Clone</title>
        <link rel="shortcut icon" href="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
