import 'styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Container } from 'components/atoms'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
