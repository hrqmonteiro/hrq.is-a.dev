import { Link, ThemeButton } from 'components/atoms'

const LINK_CLASSES = 'mx-4'

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

const Navbar = () => (
  <div className='flex items-center justify-between w-full my-8'>
    <ul className='inline-flex invisible lg:visible'>
      {links.map((link: any, index: number) => (
        <li className={LINK_CLASSES} key={index}>
          <Link href={link.url} title={link.name} />
        </li>
      ))}
    </ul>
    <ThemeButton />
  </div>
)

export default Navbar
