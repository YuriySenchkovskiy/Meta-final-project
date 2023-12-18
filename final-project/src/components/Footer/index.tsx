import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reserve</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Online order</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                Chicago <br />
                Little Lemon street,
                <br />
                Illinois 63333 <br />
                USA
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+14521111213" target="_blank" rel="external">
                452 111-12-13
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                info@littlelemon.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed with Love.</span>
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
