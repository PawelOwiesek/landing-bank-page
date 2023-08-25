import Tile from "../../common/Tile";
import { articles } from "../../assets/data";
import { Wrapper } from "../Main/styled";
import { Image } from "./styled";
import money from "./images/image-currency.jpg";
import restaurant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";
import confetti from "./images/image-confetti.jpg";

const SubSection = () => {
  return (
    <>
      <Wrapper id="Blog">
        <Tile
          icon={<Image src={money} alt="money" />}
          subTitle={articles.blog.subTitle}
          title={articles.blog.title}
          content={articles.blog.content}
        />
        <Tile
          icon={<Image src={restaurant} alt="restaurant" />}
          subTitle={articles.restaurant.subTitle}
          title={articles.restaurant.title}
          content={articles.restaurant.content}
        />
        <Tile
          icon={<Image src={plane} alt="plane" />}
          subTitle={articles.plane.subTitle}
          title={articles.plane.title}
          content={articles.plane.content}
        />
        <Tile
          icon={<Image src={confetti} alt="confetti" />}
          subTitle={articles.confetti.subTitle}
          title={articles.confetti.title}
          content={articles.confetti.content}
        />
      </Wrapper>
    </>
  );
};
export default SubSection;
