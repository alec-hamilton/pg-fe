import styles from './NavLogo.module.css';

const NavLogo = () => {
  return (
    <a href="./">
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
    </a>
  );
};

export default NavLogo;
