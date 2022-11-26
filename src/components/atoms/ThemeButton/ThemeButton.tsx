import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'phosphor-react'

const ThemeButton = (): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, systemTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log(theme)
  }, [theme])

  const renderThemeButton = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
      <button
        className='flex items-center justify-center w-8 h-8 rounded-full'
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {currentTheme === 'dark' ? (
          <Sun className='text-xl' />
        ) : (
          <Moon className='text-xl' />
        )}
      </button>
    )
  }

  return <>{renderThemeButton()}</>
}
export default ThemeButton
