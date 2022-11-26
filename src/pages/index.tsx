import { NextPage } from 'next'
import { Hero, Navbar } from 'components/molecules'

const Home: NextPage = () => (
  <main>
    <Navbar />
    <Hero />
  </main>
)

export default Home
