import './Header.css'
import stacklineLogo from '../../assets/images/stackline_logo.svg'

export const Header = () => {
  return (
    <header className="header">
      <img className="header_image" src={stacklineLogo} alt="Stackline Logo" />
    </header>
  )
}