import { Item, Link, Links } from "../../styled";

const RightNav = ({ open }) => {
  return (
    <Links open={open}>
      <Item>
        <Link href="#Home">Home</Link>
      </Item>
      <Item>
        <Link href="#About">About</Link>
      </Item>
      <Item>
        <Link href="#Contact">Contact</Link>
      </Item>
      <Item>
        <Link href="#Blog">Blog</Link>
      </Item>
      <Item>
        <Link href="#Careers">Careers</Link>
      </Item>
    </Links>
  );
};
export default RightNav;
