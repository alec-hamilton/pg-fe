import './styles.css';
import Season from './components/Season';
import { season1Data } from './services/EpisodeData';
import { season2Data } from './services/EpisodeData';
import { season3Data } from './services/EpisodeData';

function App() {

    return (
        <>
        <Season seasonData={season3Data} />
        <Season seasonData={season2Data} />
        <Season seasonData={season1Data} />
        </>
    );
}

export default App;
