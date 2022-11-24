import Season from "./components/Season/Season";
import List from "./components/List/List";
import mixData from "../../data/mixData";

const Home = () => {
  return (
    <>
      {mixData.map((season) => {
        return (
          <div className="main-container" key={season.details.season}>
            <Season seasonData={season} />
            <List seasonData={season} />
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Home;
