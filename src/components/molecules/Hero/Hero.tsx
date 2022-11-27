import { Link } from 'components/atoms'
import useBreakpoints from 'hooks/useBreakpoints'

const Hero = () => {
  const { isSm } = useBreakpoints()

  return (
    <div className='flex items-center min-h-screen'>
      <div>
        <h1 className='text-5xl font-bold'>Henrique Monteiro</h1>
        <h2 className='mb-6 text-xl'>
          Systems Analyst at{' '}
          <Link bordered href='https://minu.co' title='Minu' target='_blank' />.{' '}
          {isSm && <br />}
          Lead Frontend Engineer at{' '}
          <Link
            bordered
            href='https://laudoaudiovisual.com.br'
            title='LAV'
            target='_blank'
          />
          .
        </h2>
        <p>
          <span className='italic'>Tecnology-oriented problem solver.</span>{' '}
          Building enterprise-grade software solutions.
          <br />
          Telling stories about the JavaScript ecossystem.
        </p>
      </div>
    </div>
  )
}

export default Hero
