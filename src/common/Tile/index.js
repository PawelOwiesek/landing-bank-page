import { Content, SubTitle } from "./styled";

const Tile = ({ icon, title, content, subTitle }) => {
  return (
    <div>
      <p>{icon}</p>
      <SubTitle>{subTitle}</SubTitle>
      <p>{title}</p>
      <Content>{content}</Content>
    </div>
  );
};
export default Tile;
