import styles from "./Navbar.module.css";
import NavLogo from "./NavLogo/NavLogo";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className={styles.TopNav}>
      <NavLogo />
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
