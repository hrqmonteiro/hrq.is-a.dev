import { Link, ThemeButton } from 'components/atoms'

const Navbar = () => (
  <div className='flex justify-between w-full'>
    <ul className='inline-flex'>
      <li>
        <Link href='#'>A</Link>
      </li>
      <li>
        <Link href='#'>A</Link>
      </li>
      <li>
        <Link href='#'>A</Link>
      </li>
      <li>
        <Link href='#'>A</Link>
      </li>
    </ul>
    <ThemeButton onClick={() => console.log('test')} />
  </div>
)

export default Navbar
