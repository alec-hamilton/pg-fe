import styles from "./List.module.css";

const List = ({ seasonData }) => {
  const firstHalfEpisodes = seasonData.episodes.filter(
    (episode) => episode.episode <= 6
  );
  const secondHalfEpisodes = seasonData.episodes.filter(
    (episode) => episode.episode >= 7
  );

  return (
    <div className={styles.ListContainer}>
      <table className={styles.ListLeft}>
        <tbody>
          {firstHalfEpisodes.map((episode, index) => {
            return (
              <tr key={index}>
                <td className={styles.EpisodeNumber}>e{episode.episode}</td>
                <td>
                  <a
                    href={episode.link}
                    className={styles.EpisodeList}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {episode.artist === "?" ? "" : episode.artist}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.VerticalLine}></div>
      <table className={styles.ListRight}>
        <tbody>
          {secondHalfEpisodes.map((episode, index) => {
            return (
              <tr key={index}>
                <td className={styles.EpisodeNumber}>e{episode.episode}</td>
                <td>
                  <a
                    href={episode.link}
                    className={styles.EpisodeList}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {episode.artist === "?" ? "" : episode.artist}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
