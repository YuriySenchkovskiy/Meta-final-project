import { useState, FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Menu } from "./styles";
import logoImg from "../../assets/Logo.svg";
import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import basket from "../../assets/basket.svg";
import close from "../../assets/close.svg";

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <Container {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}>
            <img src={hamburgerMenu} alt="Open menu" />
          </button>
        </li>
        <li> <img className="basketIcon" src={basket} alt="Basket" /> </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button aria-label="Close menu" onClick={handleMenu}>
          <img src={close} alt="Close menu" />
        </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="#about">About</HashLink> </li>
          <li> <HashLink to="#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reserve</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Online order</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default MobileNav;