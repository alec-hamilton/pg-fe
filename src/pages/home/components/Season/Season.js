import styles from "./Season.module.css";
import { Link } from "react-router-dom";

const Season = ({ seasonData }) => {
  const { details: {season, site, artist}, episodes } = seasonData;
  return (
    <div>
      <h1>season {season}</h1>
      <p className={styles.ArtistLine}>
        <a href={site} target="_blank" rel="noreferrer">
          artwork by {artist}
        </a>
      </p>
      <div className={styles.GridContainer}>
        {episodes.map((episode, index) => {
          return (
            <img
              src={`/images/${episode.img}`}
              alt=""
              className={styles["e" + episode.episode]}
              key={index}
            />
          );
        })}
        {episodes.map((episode, index) => {
          return (
            <Link
              to={episode.link}
              className={styles["e" + episode.episode]}
              target={episode.link === "#" ? "_self" : episode.link}
              rel="noreferrer"
              key={index}
            >
              <div className={styles.SQText}>
                <h3>season {season}</h3>
                <h3>episode {episode.episode}</h3>
                <h2>{episode.artist}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Season;
