import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.FooterLogo}>
        <a href="#">
          <img src="images/pg-vector-white.svg" alt="" className={styles.LogoWhite} />
        </a>
      </div>
      <ul className={styles.FooterLinks}>
        <li>
          <a href="https://soundcloud.com/pleasuregallery" target="_blank">
            soundcloud
          </a>
          &nbsp;/&nbsp;
        </li>
        <li>
          <a
            href="https://www.instagram.com/pleasure__gallery/"
            target="_blank"
          >
            instagram
          </a>
        </li>
      </ul>
      <p className={styles.FooterLine}>
        <a href="https://github.com/alec-hamilton/pg-site">
          site designed and built by alec hamilton
        </a>
      </p>
    </footer>
  );
};

export default Footer;
