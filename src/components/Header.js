import logo from '../images/Vector.svg';
import '../index.css';

function Header() {
  return (
    <header className="header">
      <img className="logo" id="logo" src={logo} alt="logo"/>
    </header>
  )
}
export default Header; 
