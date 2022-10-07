import './styles.css';
import Season from './pages/home/components/Season/Season';
import List from './pages/home/components/List/List';
import { season1Data } from './services/EpisodeData';
import { season2Data } from './services/EpisodeData';
import { season3Data } from './services/EpisodeData';

function App() {

    return (
        <section className="main-container">
            <Season seasonData={season3Data} />
            <List seasonData={season3Data} />
            <Season seasonData={season2Data} />
            <List seasonData={season2Data} />
            <Season seasonData={season1Data} />
            <List seasonData={season1Data} />     
        </section>
        
        
    );
}

export default App;
