import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from 'components/molecules'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
