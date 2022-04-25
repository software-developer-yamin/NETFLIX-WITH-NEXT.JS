import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <section className="h-screen relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]" >
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner/>
      </main>
    </section>
  )
}

export default Home
