import { Button } from "../InviteButton/styled";
import {
  Logo,
  Container,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
  Link,
  Wrapper,
  LinksWrapper,
  Span,
} from "./styled";
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo />
          <div>
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
        </Wrapper>
        <LinksWrapper>
          <Link>About Us</Link>
          <Link>Careers</Link>
          <Link>Contact</Link>
          <Link>Support</Link>
          <Link>Blog</Link>
          <Link>Privacy Policy</Link>
        </LinksWrapper>
        <Wrapper>
          <Button>Request Invite</Button>
          <Span> © Easybank. All Rights Reserved</Span>
        </Wrapper>
      </Container>
    </>
  );
};
export default Footer;
