import {
  ArtistLine,
  HoverTextArtist,
  HoverTextSeasonEpisode,
  SeasonTitle,
} from "../../../../components/Typography/Typography.styles";
import { EpisodeTextBox, GridContainer } from "./Season.styles";
import { ExternalLink } from "../../../../components/Links/Links.styles";

const Season = ({ seasonData }) => {
  const {
    details: { season, site, artist },
    episodes,
  } = seasonData;

  return (
    <>
      <SeasonTitle>season {season}</SeasonTitle>
      <ExternalLink href={site}>
        <ArtistLine>artwork by {artist}</ArtistLine>
      </ExternalLink>
      <GridContainer>
        {episodes.map(({ episode, img }) => {
          return (
            <img
              src={`/images/${img}`}
              alt=""
              className={"e" + episode}
              key={episode}
            />
          );
        })}
        {episodes.map(({ episode, link, artist }) => {
          return (
            <a
              href={link}
              className={"e" + episode}
              target={link === "#" ? "_self" : link}
              rel="noreferrer"
              key={episode}
            >
              <EpisodeTextBox>
                <HoverTextSeasonEpisode>season {season}</HoverTextSeasonEpisode>
                <HoverTextSeasonEpisode>episode {episode}</HoverTextSeasonEpisode>
                <HoverTextArtist>{artist}</HoverTextArtist>
              </EpisodeTextBox>
            </a>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Season;
