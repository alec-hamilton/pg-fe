import classes from './NavLogo.module.css';

const NavLogo = () => {
  return (
    <a href="./">
      <div className={classes.LogoContainer}>
        <img
          className={classes.LogoImage}
          id="top"
          src="images/logo-94x94.png"
          alt="japanese wooden block lotus flower"
        />
        <div className={classes.LogoText}>
          pleasure
          <br />
          gallery
        </div>
      </div>
    </a>
  );
};

export default NavLogo;
