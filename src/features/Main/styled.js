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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const iconStyles = `
  transition-duration: 1s;
  &:hover{
    transform: scale(1.1);
  }
`;

const StyledIcon = styled.svg`
  ${iconStyles}
`;

export const ApiIcon = styled(StyledIcon).attrs({ as: apiIcon })``;
export const BudgetIcon = styled(StyledIcon).attrs({ as: budgetIcon })``;
export const OnBoardingIcon = styled(StyledIcon).attrs({ as: onBoardIcon })``;
export const OnlineIcon = styled(StyledIcon).attrs({ as: onlineIcon })``;
