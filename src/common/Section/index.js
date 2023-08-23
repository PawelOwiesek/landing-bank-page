import { Container, Title } from "./styled";

const Section = ({ title, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{body}</div>
    </Container>
  );
};
export default Section;
