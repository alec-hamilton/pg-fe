import './styles.css';
import {useEffect, useState} from "react";
import Season1 from "./Components/Season1";

function App() {

    const [episodeItems, setEpisodeItems] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/episodes');

        if (!response.ok) {
            throw new Error('Data could not be fetched.')
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()
                .then((episodeData) => {
                    setEpisodeItems(episodeData);
                })
                .catch((e) => {
                    console.log(e.message);
            })
        }, []
    );

    return (
        <Season1 episodeItems={episodeItems} />
    );
}

export default App;
