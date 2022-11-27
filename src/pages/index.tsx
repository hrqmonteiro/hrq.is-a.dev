import { NextPage } from 'next'
import { Hero, Navbar, Projects } from 'components/molecules'

const Home: NextPage = () => (
  <main>
    <Hero />
    <Projects />
  </main>
)

export default Home
