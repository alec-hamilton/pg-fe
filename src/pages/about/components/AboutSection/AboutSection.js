import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.AboutContainer}>
      <h1>about</h1>
      <p>
        Pleasure gallery is a mix series, radio show and event promoter based in
        Bristol and founded by Alec Hamilton.
      </p>
      <p>
        Born out of a love for the unique relationship between music and art,
        pleasure gallery mixes exist within 12 episode seasons. Each season has
        its own piece of artwork made for it and each mix reveals 1/12th of the
        whole picture. When a season finishes, the artwork is uncovered in full.
      </p>
      <p>
        For all enquiries please email &nbsp;
        <a href="mailto:alec@pleasuregallery.net">alec@pleasuregallery.net</a>
      </p>
      <hr />
    </div>
  );
};

export default AboutSection;
