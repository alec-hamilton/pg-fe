import NavLinks from "./NavLinks/NavLinks";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={classes.Hamburger}
      size="2rem"
      color="#ffffff"
      onClick={() => setOpen(!open)}
    />
  );

  const closedIcon = (
    <IoMdClose
      className={classes.Hamburger}
      size="2rem"
      color="#ffffff"
      onClick={() => setOpen(!open)}
    />
  );

  return <nav className={classes.MobileNavigation}>
    {open ? closedIcon : hamburgerIcon}
    {open && <NavLinks />}</nav>;
};

export default MobileNavigation;
