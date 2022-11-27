interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div className='flex items-center justify-center w-full'>
    <div className='container max-w-2xl px-8'>{children}</div>
  </div>
)

export default Container
