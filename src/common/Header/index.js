import { Logo, NavBar, Links, Link, Kebab, HamburgerIcon } from "./styled";
import { Button } from "../InviteButton/styled";
const Header = () => {
  const mobile = window.innerWidth;

  return (
    <NavBar>
      <Logo />

      {mobile < 767 ? (
        <HamburgerIcon />
      ) : (
        <Links>
          <Link href="#Home">Home</Link>
          <Link href="#About">About</Link>
          <Link href="#Contact">Contact</Link>
          <Link href="#Blog">Blog</Link>
          <Link href="#Careers">Careers</Link>
        </Links>
      )}
      {mobile < 767 ? null : <Button>Request Invite</Button>}
    </NavBar>
  );
};

export default Header;
