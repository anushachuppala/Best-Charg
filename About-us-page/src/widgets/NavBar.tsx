import "./NavBar.modules.css";
import logo from "../assets/images/logo.png";
import { IoChevronDown } from "react-icons/io5";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Best Charg Logo" className="logo-image" />
      </div>

      <ul>
        <li className="products-menu">
          Products
          <IoChevronDown className="dropdown-icon" />
        </li>
        <li>Solutions</li>
        <li>Best Hub</li>
        <li>Blog</li>
        <li>About us</li>
      </ul>

      <button className="Btn-get-started">Get Started</button>
    </nav>
  );
}

export default NavBar;
