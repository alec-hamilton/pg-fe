import "./styles.css";
import Season from "./pages/home/components/Season/Season";
import List from "./pages/home/components/List/List";
import season1 from "./services/season1.json";
import season2 from "./services/season2.json";
import season3 from "./services/season3.json";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Season seasonData={season3} />
        <List seasonData={season3} />
        <hr />
      </div>
      <div className="main-container">
        <Season seasonData={season2} />
        <List seasonData={season2} />
        <hr />
      </div>
      <div className="main-container">
        <Season seasonData={season1} />
        <List seasonData={season1} />
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default App;
