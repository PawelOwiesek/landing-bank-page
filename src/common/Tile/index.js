import { Content, Link, SubTitle } from "./styled";

const Tile = ({ icon, title, content, subTitle }) => {
  return (
    <div>
      <Link>{icon}</Link>
      <SubTitle>{subTitle}</SubTitle>
      <p>{title}</p>
      <Content>{content}</Content>
    </div>
  );
};
export default Tile;
