import classes from "../Navbar.module.css";

const NavLinks = () => {
  return (
    <ul className={classes.NavbarLinksContainer}>
      <li>
        <a className={classes.MenuLink} href="/about">
          about
        </a>
      </li>
      <li>
        <a
          className={classes.MenuLink}
          href="https://soundcloud.com/pleasuregallery"
          target="_blank"
        >
          soundcloud
        </a>
      </li>
      <li>
        <a
          className={classes.MenuLink}
          href="https://www.instagram.com/pleasure__gallery/"
          target="_blank"
        >
          instagram
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
