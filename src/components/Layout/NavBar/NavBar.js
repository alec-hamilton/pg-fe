import NavLogo from "./NavLogo/NavLogo";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { TopNav } from "./NavBar.styles";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  return (
    <TopNav>
      <NavLogo />
      <MobileNavigation />
      <Navigation />
      <BurgerMenu />
    </TopNav>
  );
};

export default NavBar;
