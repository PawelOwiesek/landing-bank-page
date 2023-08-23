import Tile from "../../common/Tile";
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
      <Info>
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br /> Control your finances like never before.
      </Info>
      <Wrapper>
        <Tile
          icon={<OnlineIcon />}
          title="Online Banking"
          content="Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world."
        />
        <Tile
          icon={<BudgetIcon />}
          title="Simple Budgeting"
          content="See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits"
        />
        <Tile
          icon={<OnBoardingIcon />}
          title="Fast Onboarding"
          content="We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away."
        />
        <Tile
          icon={<ApiIcon />}
          title="Open API"
          content="Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier."
        />
      </Wrapper>
    </>
  );
};
export default Main;
