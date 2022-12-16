import { useCycle } from "framer-motion";
import { BurgerMenuContainer, Close, Hamburger } from "./BurgerMenu.styles";
import NavLinks from "./NavLinks/NavLinks";

const BurgerMenu = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const hamburgerIcon = <Hamburger onClick={cycleOpen} />;

  const closedIcon = <Close onClick={cycleOpen} />;

  const closeMobileMenu = () => {
    cycleOpen();
  };

  return (
    <BurgerMenuContainer>
      {open ? closedIcon : hamburgerIcon}
      <NavLinks open={open} closeMobileMenu={closeMobileMenu} />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
