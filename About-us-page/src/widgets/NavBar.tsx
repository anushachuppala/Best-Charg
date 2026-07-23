import styles from "./NavBar.module.css";
import logo from "../assets/images/logo.png";
import { IoChevronDown } from "react-icons/io5";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Best Charg Logo" className={styles.logoimage} />
      </div>

      <ul className={styles.navlinks}>
        <li className={styles.productsMenu}>
          Products
          <IoChevronDown className={styles.icon} />
        </li>

        <li>Solutions</li>
        <li className={styles.active}>Best Hub</li>
        <li>Blog</li>
        <li>About us</li>
      </ul>

      <button className={styles["Btn-get-started"]}>Get Started</button>
    </nav>
  );
}

export default NavBar;
