const List = ({seasonData}) => {

    const firstHalfEpisodes = seasonData.episodes.filter((episode) => episode.episode < 7);
    const secondHalfEpisodes = seasonData.episodes.filter((episode) => episode.episode > 6);

    // console.log(firstHalfEpisodes);

    return (
        <div className="list-container">
            <table className="list-left">
                <tbody>
                    {firstHalfEpisodes.map((episode, index) => {
                        return (
                            <tr key={index}>
                                <td className="episode-number">e{episode.episode}</td>
                                <td><a href={episode.link} className="episode-list" target="_blank" rel="noreferrer">{episode.artist}</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="vertical-line"></div>
            <table className="list-right">
                <tbody>
                    {secondHalfEpisodes.map((episode, index) => {
                        return (
                            <tr key={index}>
                                <td className="episode-number">e{episode.episode}</td>
                                <td><a href={episode.link} className="episode-list" target="_blank" rel="noreferrer">{episode.artist}</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default List;
