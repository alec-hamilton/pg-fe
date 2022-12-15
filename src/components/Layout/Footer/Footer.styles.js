import styled from "styled-components";

export const FooterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin: 0 auto;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  color: var(--white);
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const FooterLinksItem = styled.li`
  padding: 0 0.25rem;
`;

export const FooterLine = styled.p`
  text-align: center;
`;
