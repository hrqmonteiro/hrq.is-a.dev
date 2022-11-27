import NextHead from 'next/head'

interface HeadProps {
  title?: string
}

const Head = ({ title }: HeadProps) => (
  <NextHead>
    <title>{title || 'Henrique Monteiro'}</title>
    <meta name='description' content='Henrique Monteiro' />
    <meta name='robots' content='noindex, nofollow' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='theme-color' content='#ffffff' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta
      name='msapplication-TileImage'
      content='/favicons/ms-icon-144x144.png'
    />
  </NextHead>
)

export default Head
