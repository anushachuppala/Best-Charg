import styles from "./NavBar.module.css";
import logo from "../../assets/images/logo.png";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import Button from "../../shared/ui/Button";
import { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logocontainer}>
            <img
              src={logo}
              alt="Best Charg Logo"
              className={styles.logoimage}
            />
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>

          <ul
            className={`${styles.navlinks} ${menuOpen ? styles.navlinksOpen : ""}`}
          >
            <li className={styles.productsMenu}>
              <Link to="/products">Products</Link>
              <IoChevronDown className={styles.icon} />
            </li>

            <li>
              <Link to="/solutions">Solutions</Link>
            </li>

            <li>
              <Link to="/besthub">Best Hub</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li className={styles.active}>About us</li>

            <li className={styles.mobileButton}>
              <Button text="Get Started" variant="primary" />
            </li>
          </ul>

          <div className={styles.desktopButton}>
            <Button text="Get Started" variant="primary" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
