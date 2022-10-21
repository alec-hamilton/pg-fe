import NavLinks from "./NavLinks/NavLinks";
import styles from "./Navbar.module.css";


const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
