import 'styles/global.css'
import type { AppProps } from 'next/app'
import { Container } from 'components/atoms'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
