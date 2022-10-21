import styles from "./Season.module.css";
import { Link } from "react-router-dom";

const Season = ({ seasonData }) => {
  return (
    <div>
      <h1>season {seasonData.details.season}</h1>
      <p className={styles.ArtistLine}>
        <a href={seasonData.details.site} target="_blank" rel="noreferrer">
          artwork by {seasonData.details.artist}
        </a>
      </p>
      <div className={styles.GridContainer}>
        {seasonData.episodes.map((episode, index) => {
          return (
            <img
              src={`/images/${episode.img}`}
              alt=""
              className={styles["e" + episode.episode]}
              key={index}
            />
          );
        })}
        {seasonData.episodes.map((episode, index) => {
          return (
            <Link
              to={episode.link}
              className={styles["e" + episode.episode]}
              target={episode.link === "#" ? "_self" : episode.link}
              rel="noreferrer"
              key={index}
            >
              <div className={styles.SQText}>
                <h3>season {seasonData.details.season}</h3>
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
