import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface LinkProps {
  bordered?: boolean
  href: string
  title: string
  target?: string
}

const Link = ({ bordered, href, title, target }: LinkProps): JSX.Element => {
  const { pathname } = useRouter()
  const isActive = pathname === href

  return (
    <NextLink
      href={href}
      target={target}
      className={cn(
        'hover:text-accent font-medium border-accent',
        bordered && 'border-b-2',
        isActive ? 'text-accent' : 'text-accent-1'
      )}
    >
      {title}
    </NextLink>
  )
}

export default Link
