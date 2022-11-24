import NavLinks from "./NavLinks/NavLinks";
import styles from "./Navbar.module.css";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <BiMenu
      className={styles.Hamburger}
      size="2rem"
      onClick={() => setOpen(!open)}
    />
  );

  const closedIcon = (
    <BiX
      className={styles.Hamburger}
      size="2rem"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closedIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
