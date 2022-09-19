const Season = ({episodeItems}) => {

    // need to manipulate the episodeItems array to create new 12 element arrays.

    return (
        <section>
            <div className="main-container top-container">
                <h1>season 3</h1>
                <p className="artist-line"><a href="https://www.marutonkun.com/" target="_blank">artwork by márton tóth</a></p>
                <div className="grid-container">
                    {episodeItems.map((episodeItem, index) => {
                        return (
                            <img src={`/images/${}`}
                        )
                    })}
                    <img src="images/s3e1.png" alt="" className="e1" />
                    <img src="images/s3e2.png" alt="" className="e2" />
                    <img src="images/s3e3.png" alt="" className="e3" />
                    <img src="images/s3e4.png" alt="" className="e4" />
                    <img src="images/s3e5.png" alt="" className="e5" />
                    <img src="images/s3e6.png" alt="" className="e6" />
                    <img src="images/s3e7.png" alt="" className="e7" />
                    <img src="images/pg-placeholder-white.png" alt="" className="e8" />
                    <img src="images/pg-placeholder-white.png" alt="" className="e9" />
                    <img src="images/pg-placeholder-black.png" alt="" className="e10" />
                    <img src="images/pg-placeholder-white.png" alt="" className="e11" />
                    <img src="images/pg-placeholder-black.png" alt="" className="e12" />


                </div>
            </div>
        </section>
    )
}

export default Season;
