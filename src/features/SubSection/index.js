import Tile from "../../common/Tile";
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
          subTitle="By Claire Robinson"
          title="Receive money in any currency with no fees "
          content="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "
        />
        <Tile
          icon={<Image src={restaurant} alt="restaurant" />}
          subTitle="By Wilson Hutton"
          title=" Treat yourself without worrying about money"
          content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <Tile
          icon={<Image src={plane} rel="plane" />}
          subTitle="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          content="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <Tile
          icon={<Image src={confetti} rel="confetti" />}
          subTitle="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          content="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "
        />
      </Wrapper>
    </>
  );
};
export default SubSection;
