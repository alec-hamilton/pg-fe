import { useState } from "react";
import { BurgerMenuContainer, Close, Hamburger } from "./BurgerMenu.styles";
import NavLinks from "./NavLinks/NavLinks";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <Hamburger onClick={() => setOpen(!open)} />;

  const closedIcon = <Close onClick={() => setOpen(!open)} />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <BurgerMenuContainer>
      {open ? closedIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
