import Season from "./components/Season/Season";
import List from "./components/List/List";
import season1 from "../../services/season1.json";
import season2 from "../../services/season2.json";
import season3 from "../../services/season3.json";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
