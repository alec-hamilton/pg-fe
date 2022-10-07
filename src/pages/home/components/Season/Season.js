const Season = ({seasonData}) => {

    return (
        <div>
            <h1>season {seasonData.details.season}</h1>
            <p className="artist-line">
                <a href={seasonData.details.site} target="_blank" rel="noreferrer">artwork by {seasonData.details.artist}</a>
            </p>
            <div className="grid-container">
                {seasonData.episodes.map((episode, index) => {
                        return (
                            <img src={`/images/${episode.img}`} alt="" className={`e${episode.episode}`} key={index}/>
                        );
                    }
                )}
                {seasonData.episodes.map((episode, index) => {
                        return (
                            <a href={episode.link} className={`e${episode.episode}`} target="_blank" rel="noreferrer" key={index}>
                                <div className="sq-text">
                                    <h3>season {seasonData.details.season}</h3>
                                    <h3>episode {episode.episode}</h3>
                                    <h2>{episode.artist}</h2>
                                </div>
                            </a>
                        );
                    }
                )}
            </div>    
        </div>
    );
}

export default Season;
