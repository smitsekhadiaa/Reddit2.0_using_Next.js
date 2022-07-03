import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-200">
      <Head>
        <title>Reddit2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
    </div>
  )
}

export default Home
