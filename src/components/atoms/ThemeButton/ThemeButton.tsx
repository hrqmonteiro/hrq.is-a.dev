interface ThemeButtonProps {
  onClick: () => void
}

const ThemeButton = ({ onClick }: ThemeButtonProps): JSX.Element => (
  <button className='w-8 h-8 rounded-full bg-secondary' onClick={onClick}>
    Change
  </button>
)

export default ThemeButton
