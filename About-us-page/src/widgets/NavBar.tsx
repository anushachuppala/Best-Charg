import styles from "./NavBar.module.css";
import logo from "../assets/images/logo.png";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import Button from "../shared/ui/Button";
import { useState } from "react";

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
              Products
              <IoChevronDown className={styles.icon} />
            </li>

            <li>Solutions</li>
            <li>Best Hub</li>
            <li>Blog</li>
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
