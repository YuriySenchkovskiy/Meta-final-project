import { FC } from "react";
import Button from "../Button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import food from "../../assets/food.png";

const CallToAction: FC = ():  JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Italian restaurant in Chicago</h2>
        <p className="lead-txt">
            We're a family-run Mediterranean eatery, dedicated to blending classic recipes with a contemporary flair.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </Content>
      <Image>
        <img src={food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;