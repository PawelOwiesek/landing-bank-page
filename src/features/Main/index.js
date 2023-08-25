import Tile from "../../common/Tile";
import { features } from "../../assets/data";
import {
  ApiIcon,
  BudgetIcon,
  Info,
  OnBoardingIcon,
  OnlineIcon,
  Wrapper,
} from "./styled";

const Main = () => {
  return (
    <>
      <Info>{features.info.content}</Info>
      <Wrapper>
        <Tile
          icon={<OnlineIcon />}
          title={features.online.title}
          content={features.online.content}
        />
        <Tile
          icon={<BudgetIcon />}
          title={features.budget.title}
          content={features.budget.content}
        />
        <Tile
          icon={<OnBoardingIcon />}
          title={features.onBoarding.title}
          content={features.onBoarding.content}
        />
        <Tile
          icon={<ApiIcon />}
          title={features.api.title}
          content={features.api.content}
        />
      </Wrapper>
    </>
  );
};
export default Main;
