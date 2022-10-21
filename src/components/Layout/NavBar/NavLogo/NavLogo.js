import styles from './NavLogo.module.css';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link to="/">
      <div className={styles.LogoContainer}>
        <img
          className={styles.LogoImage}
          id="top"
          src="images/logo-94x94.png"
          alt="japanese wooden block lotus flower"
        />
        <div className={styles.LogoText}>
          pleasure
          <br />
          gallery
        </div>
      </div>
    </Link>
  );
};

export default NavLogo;
