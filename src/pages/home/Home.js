import Season from "./components/Season/Season";
import List from "./components/List/List";
import { SeasonContainer } from "./Home.styles";
import mixData from "../../data/mixData";

const Home = () => {
  return (
    <>
      {mixData.map((season) => {
        return (
          <SeasonContainer key={season.details.season}>
            <Season seasonData={season} />
            <List seasonData={season} />
            <hr />
          </SeasonContainer>
        );
      })}
    </>
  );
};

export default Home;
