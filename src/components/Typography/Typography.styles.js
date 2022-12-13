import styled from "styled-components";

export const SeasonTitle = styled.h2`
  padding: 0;
  margin: 1.2rem 0.4rem 0 0.4rem;
  color: var(--white);
  font-weight: 500;
`;

export const ArtistLine = styled.p`
  margin-top: 0;
  margin-left: 0.4rem;
  font-weight: 300;
`;

export const HoverTextArtist = styled.h3`
  color: var(--white);
  font-weight: 500;
  font-size: 2.5vw;
  padding-top: 5px;
  margin: 0;
  text-decoration: none;

  @media only screen and (min-width: 952px) {
    font-size: 1.8rem;
    padding-top: 1rem;
  }
`;

export const HoverTextSeasonEpisode = styled.h4`
  color: var(--white);
  font-weight: 300;
  font-size: 2vw;
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 952px) {
    font-size: 1rem;
  }
`;
