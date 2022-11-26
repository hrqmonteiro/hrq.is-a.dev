import 'styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Container, Head } from 'components/atoms'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
