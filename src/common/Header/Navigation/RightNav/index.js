import { Link, Links } from "../../styled";

const RightNav = ({ open }) => {
  return (
    <Links open={open}>
      <Link href="#Home">Home</Link>
      <Link href="#About">About</Link>
      <Link href="#Contact">Contact</Link>
      <Link href="#Blog">Blog</Link>
      <Link href="#Careers">Careers</Link>
    </Links>
  );
};
export default RightNav;
