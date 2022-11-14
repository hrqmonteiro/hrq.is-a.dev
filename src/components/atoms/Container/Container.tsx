interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div className='flex items-center justify-center'>
    <div className='container max-w-2xl'>{children}</div>
  </div>
)

export default Container
