import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                exact
                to="/"
                className="navbar__link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/Projects"
                className="navbar__link"
                activeClassName="active"
              >
                Projects
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/About"
                className="navbar__link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/Contact"
                className="navbar__link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
