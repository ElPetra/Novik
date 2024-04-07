import "./Header.css";
import close from "../../icons/close.svg";
function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <button className="close">
            <img src={close} alt="close-icon" />
          </button>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <hr />
      </nav>
    </header>
  );
}

export default Header;
