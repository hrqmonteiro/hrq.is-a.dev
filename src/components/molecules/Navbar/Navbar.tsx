import { Container, Link, ThemeButton } from 'components/atoms'

const LINK_CLASSES = 'mr-8'

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
  <div className='fixed w-full navbar'>
    <div className='flex justify-center w-full'>
      <Container>
        <div className='flex items-center justify-between w-full my-8 mb-20'>
          <ul className='inline-flex invisible lg:visible'>
            {links.map((link: any, index: number) => (
              <li className={LINK_CLASSES} key={index}>
                <Link href={link.url} title={link.name} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  </div>
)

export default Navbar
