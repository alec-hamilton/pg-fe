const Season1 = ({episodeItems}) => {

    // need to manipulate the episodeItems array to create new 12 element arrays.
    const season1Items = episodeItems.slice(0, 12);
    console.log(season1Items);

    return (
        <section>
            <div className="main-container top-container">
                <h1>season 1</h1>
                <p className="artist-line"><a href="https://www.instagram.com/shawcreations/" target="_blank" rel="noreferrer">artwork by sophie shaw</a></p>
                <div className="grid-container">
                    {season1Items.map((season1Item, index) => {
                        return (
                            <img src={`/images/${season1Item.img}`} alt="" className={`e${season1Item.episode}`} key={index}/>
                        );
                    }
                )}
                    {season1Items.map((season1Item, index) => {
                        return (
                            <a href={`${season1Item.link}`} className={`e${season1Item.episode}`} target="_blank" rel="noreferrer" key={index}>
                                <div className="sq-text">
                                    <h3>season 1</h3>
                                    <h3>episode {season1Item.episode}</h3>
                                    <h2>{season1Item.artist}</h2>
                                </div>
                            </a>
                        );
                    }
                )}
                </div>
            </div>
        </section>
    )
}

export default Season1;
