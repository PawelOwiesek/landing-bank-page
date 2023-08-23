import { styled } from "styled-components";
import { ReactComponent as apiIcon } from "./images/icon-api.svg";
import { ReactComponent as budgetIcon } from "./images/icon-budgeting.svg";
import { ReactComponent as onBoardIcon } from "./images/icon-onboarding.svg";
import { ReactComponent as onlineIcon } from "./images/icon-online.svg";

export const Info = styled.p`
  margin-top: 30px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.GrayishBlue};
  font-weight: 400;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-items: center;
  gap: 20px;
`;

export const ApiIcon = styled(apiIcon)``;
export const BudgetIcon = styled(budgetIcon)``;
export const OnBoardingIcon = styled(onBoardIcon)``;
export const OnlineIcon = styled(onlineIcon)``;
