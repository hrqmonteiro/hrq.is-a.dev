import { Link } from '@app/components/atoms'

const Hero = () => (
  <div className='min-h-sm'>
    <h1 className='text-5xl font-bold'>Henrique Monteiro</h1>
    <h2 className='mb-6 text-xl'>
      Systems Analyst at{' '}
      <Link bordered href='https://minu.co' title='Minu' target='_blank' />.
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
)

export default Hero
