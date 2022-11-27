import { useEffect, useState } from 'react'
import { Container, Link, ThemeButton } from 'components/atoms'
import { SpotifyLogo } from 'phosphor-react'

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

type Song = {
  artist: string | undefined
  title: string | undefined
}

const Navbar = () => {
  const [clock, setClock] = useState<Date>(new Date())
  const [songData, setSongData] = useState<Song>()
  const [currentSong, setCurrentSong] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getNowPlaying = async () => {
      setIsLoading(true)

      const response = await fetch('/api/spotify')
        .then((response: any) => {
          return response.json()
        })
        .catch((error) => console.log(error))

      const data = await response
      setSongData(data)

      if (data.isPlaying) {
        setCurrentSong(data.title)
      } else {
        setCurrentSong('Not Playing')
      }

      setIsLoading(false)
    }

    getNowPlaying()

    const timeId = setInterval(() => {
      setClock(new Date())
    }, 1000)

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function success(position) {
        console.log('latitude', position.coords.latitude)
        console.log('longitude', position.coords.longitude)
      })
    }

    return () => clearInterval(timeId)
  }, [])

  return !isLoading ? (
    <div className='fixed w-full text-sm opacity-50 navbar'>
      <div className='flex justify-center w-full'>
        <Container>
          <div className='flex items-center justify-between w-full my-8 mb-20'>
            <div className='flex flex-wrap w-2/3 truncate'>
              {clock.toLocaleTimeString('pt-br', { hour12: false })} · last
              visit from
            </div>
            <div
              onMouseEnter={() =>
                currentSong !== 'Not Playing' &&
                setCurrentSong(songData?.artist)
              }
              onMouseLeave={() =>
                currentSong !== 'Not Playing' && setCurrentSong(songData?.title)
              }
              className='flex items-center justify-end w-1/3'
            >
              <p className='truncate ...'>{currentSong}</p>
              <div className='flex items-center ml-1 text-lg'>
                <SpotifyLogo />
              </div>
            </div>
            <ThemeButton />
          </div>
        </Container>
      </div>
    </div>
  ) : null
}

export default Navbar
