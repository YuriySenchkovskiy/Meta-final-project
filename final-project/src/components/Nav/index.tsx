import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import basket from "../../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
        <ul>
          <li> <img src={logo} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="/#about">About</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reserve</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Online order</HashLink> </li>
          <li> <img className="basketIcon" src={basket} alt="Basket" /> </li>
        </ul>
    </Container>
  );
};

export default Nav;