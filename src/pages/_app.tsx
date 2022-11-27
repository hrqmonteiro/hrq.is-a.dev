import 'styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Container, Head } from 'components/atoms'
import { Navbar } from 'components/molecules'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange>
      <Head />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
