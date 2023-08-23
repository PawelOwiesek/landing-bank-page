import { Logo, NavBar, Links, Link } from "./styled";
import { Button } from "../InviteButton/styled";
const Header = () => {
  return (
    <NavBar>
      <Logo />
      <Links>
        <Link href="#Home">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Contact">Contact</Link>
        <Link href="#Blog">Blog</Link>
        <Link href="#Careers">Careers</Link>
      </Links>
      <Button>Request Invite</Button>
    </NavBar>
  );
};

export default Header;
