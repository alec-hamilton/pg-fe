import NavLinks from "./NavLinks/NavLinks";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={styles.Hamburger}
      size="2rem"
      color="#ffffff"
      onClick={() => setOpen(!open)}
    />
  );

  const closedIcon = (
    <IoMdClose
      className={styles.Hamburger}
      size="2rem"
      color="#ffffff"
      onClick={() => setOpen(!open)}
    />
  );

  return <nav className={styles.MobileNavigation}>
    {open ? closedIcon : hamburgerIcon}
    {open && <NavLinks />}</nav>;
};

export default MobileNavigation;
