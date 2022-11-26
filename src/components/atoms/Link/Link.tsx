import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface LinkProps {
  href: string
  title: string
  target?: string
}

const Link = ({ href, title, target }: LinkProps): JSX.Element => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <NextLink
      href={href}
      target={target}
      className={isActive ? 'text-accent' : 'text-accent-1'}
    >
      {title}
    </NextLink>
  )
}

export default Link
