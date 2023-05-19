import logo from "./../assets/images/logo.svg";
import login from "./../assets/images/login.png";

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigateur-list">
        <li>
          <a href="#">
            <img src={logo} alt="logo du site" />
          </a>
        </li>
        <li>
          <a href="#">Gestionnaire d'experience</a>
        </li>
        <li>
          <a href="#">Qui sommes-nous ?</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="">
            <img src={login} alt="icône de login" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
