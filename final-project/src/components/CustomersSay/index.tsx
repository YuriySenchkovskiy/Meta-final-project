import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Carl"
          testimonial="My visit to the restaurant was truly delightful! The flavors of the food were exquisite, and the service exceeded my expectations. I'm looking forward to returning more frequently to savor the exceptional dining experience again!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Emma"
          testimonial="I had an amazing time at the restaurant! The atmosphere was perfect for a night out, and the food was absolutely delicious. The staff made me feel so welcome, and the service was outstanding. I'm definitely planning to come back soon for another enjoyable dining experience!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Ben"
          testimonial="I had a great evening at Little Lemon Restaurant. The ambiance was pleasant, and the food was quite good, with a nice blend of flavors. The service was attentive, though there were minor delays. Overall, I'd give it a solid 4 stars and would recommend it for a casual and enjoyable dining experience. Looking forward to trying more dishes on my next visit!"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;