import { useEffect, useState } from 'react'
import { Container, Link, ThemeButton } from 'components/atoms'

const LINK_CLASSES = 'mr-8'

const links: Array<Record<string, string>> = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Uses',
    url: '/uses'
  },
  {
    name: 'Projects',
    url: '/projects'
  },
  {
    name: 'Portfolio',
    url: '/portfolio'
  }
]

const Navbar = () => {
  const [clock, setClock] = useState<Date>(new Date())
  const [isMounted, setIsMounted] = useState<boolean>(true)

  useEffect(() => {
    setIsMounted(false)
  }, [])

  useEffect(() => {
    const timeId = setInterval(() => {
      setClock(new Date())
    }, 1000)
    return () => clearInterval(timeId)
  }, [clock])

  return (
    !isMounted && (
      <div className='fixed w-full navbar'>
        <div className='flex justify-center w-full'>
          <Container>
            <div className='flex items-center justify-between w-full my-8 mb-20'>
              {clock.toLocaleTimeString().slice(0, 8)}
            </div>
          </Container>
        </div>
      </div>
    )
  )
}

export default Navbar
