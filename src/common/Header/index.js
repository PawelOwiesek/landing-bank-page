import { Logo, NavBar } from "./styled";
import { Button } from "../InviteButton/styled";
import Burger from "./Navigation/Burger";

const Header = () => {
  const mobile = window.innerWidth;

  return (
    <NavBar id="Home">
      <Logo />
      <Burger />
      {mobile < 767 ? null : <Button>Request Invite</Button>}
    </NavBar>
  );
};

export default Header;
