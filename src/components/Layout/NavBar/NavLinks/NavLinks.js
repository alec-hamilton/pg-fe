import { MenuLinkText, NavLinksContainer } from "./NavLinks.styles";
import { ExternalLink, InternalLink } from "../../../Links/Links.styles";

const NavLinks = ({ closeMobileMenu }) => {
  const menuLinksContent = [
    <InternalLink to="/" onClick={() => closeMobileMenu()}>
      home
    </InternalLink>,
    <InternalLink to="/about" onClick={() => closeMobileMenu()}>
      about
    </InternalLink>,
    <ExternalLink href="https://soundcloud.com/pleasuregallery">
      soundcloud
    </ExternalLink>,
    <ExternalLink href="https://www.instagram.com/pleasure__gallery/">
      instagram
    </ExternalLink>,
  ];

  return (
    <NavLinksContainer>
      {menuLinksContent.map((content, index) => {
        return (
          <li key={index}>
            <MenuLinkText>{content}</MenuLinkText>
          </li>
        );
      })}
    </NavLinksContainer>
  );
};

export default NavLinks;
