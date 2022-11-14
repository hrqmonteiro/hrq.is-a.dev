import NextLink from 'next/link'

interface LinkProps {
  children: React.ReactNode
  href: string
}

const Link = ({ children, href }: LinkProps): JSX.Element => (
  <NextLink href={href}>{children}</NextLink>
)

export default Link
