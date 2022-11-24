import styles from "../Navbar.module.css";
import { Link } from "react-router-dom";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <ul className={styles.NavbarLinksContainer}>
      <li>
        <Link
          className={styles.MenuLink}
          to="/about"
          onClick={() => isMobile && closeMobileMenu()}
        >
          about
        </Link>
      </li>
      <li>
        <a
          className={styles.MenuLink}
          href="https://soundcloud.com/pleasuregallery"
          target="_blank"
          rel="noreferrer"
        >
          soundcloud
        </a>
      </li>
      <li>
        <a
          className={styles.MenuLink}
          href="https://www.instagram.com/pleasure__gallery/"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
