import { Button } from "../InviteButton/styled";
import {
  Container,
  Content,
  Intro,
  Title,
  PhonesImage,
  Description,
} from "./styled";

const MainSection = () => {
  return (
    <Container>
      <Content>
        <Title> Next generation {<br />} digital banking</Title>
        <Description>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving,{<br />} budgeting, investing, and
          much more.
        </Description>
        <Button>Request Invite</Button>
      </Content>

      <PhonesImage
        src="https://i.postimg.cc/0Nk7Mn7c/image-mockups.png"
        alt="none"
      />
      <Intro />
    </Container>
  );
};

export default MainSection;
