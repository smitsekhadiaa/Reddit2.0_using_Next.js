import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <SessionProvider session={session}>  
    {/* //session token for all pages if logged in or not, signin/out logic in header.tsx file */}
      <div>
        <Header/>  
        {/* //now all pages have header */}
        <Component {...pageProps} />
      </div>
    </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
