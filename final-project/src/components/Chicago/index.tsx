import { FC } from "react";
import { Container, Content, Image } from "./styles";
import GiuseppeIsabellaFirst from "../../assets/Giuseppe-Isabella-first.jpg";
import Chef from "../../assets/chef.png";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Restaurant in Chicago</h2>
        <p className="about__text">
            Little Lemon is owned by Giuseppe and Isabella, a husband-and-wife duo who relocated from Italy in their
            youth. Always dreaming of sharing their family recipes, they've turned their passion into reality,
            bringing a taste of their heritage to your dining experience.
        </p>
        <p className="about__text">
            Giuseppe draws inspiration from family
            recipes and his culinary experience in Italy to craft our menu, while Isabella handles all the marketing
            efforts for the restaurant. Together, Giuseppe and Isabella have expanded the menu beyond traditional
            Italian, incorporating a diverse array of flavors from the broader Mediterranean region.
        </p>
      </Content>
      <Image>
        <img src={GiuseppeIsabellaFirst} alt="Giuseppe and Isabella restaurant" />
        <img src={Chef} alt="Little Lemon Chef" />
      </Image>
    </Container>
  );
};

export default Chicago;