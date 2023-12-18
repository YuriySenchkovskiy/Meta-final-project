import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import salad from "../../assets/salad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import italianDessert from "../../assets/italianDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Specials</h1>
        <Button>Online menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={salad}
          title="Salad with Burrata"
          price={24.99}
          description="Savor the refreshing harmony of flavors in our Burrata and Tomato Salad. Immerse yourself in the creamy richness of burrata paired with the vibrant sweetness of fresh tomatoes, creating a delightful symphony for your palate."
        />
        <SpecialFoodCard
          imageUrl={bruschetta}
          title="Bruschetta"
          price={9.99}
          description="Indulge in the exquisite Bruschetta at our upscale restaurant, where grilled bread is generously adorned with the perfect blend of garlic, salt, and olive oil."
        />
        <SpecialFoodCard
          imageUrl={italianDessert}
          title="italian Dessert"
          price={19.99}
          description="Crafted from grandma's secret recipe book, our Panna Cotta is an authentic delight. Each ingredient is carefully sourced, capturing the essence of homemade goodness in every bite."
        />
      </Cards>
    </Container>
  );
};

export default Specials;