import { styled } from "styled-components";
import { ReactComponent as logo } from "./images/logo.svg";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.White};
  z-index: 3;
  position: relative;

  /* @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    height: auto;
  } */
`;
export const Logo = styled(logo)``;

export const Links = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
`;

export const Kebab = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    width: 30px;
    border-bottom: 3px solid red;
  }
`;

export const Link = styled.a`
  margin: 0 15px;
  color: ${({ theme }) => theme.color.GrayishBlue};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    padding-bottom: 25px;
    border-bottom: 4px solid ${({ theme }) => theme.color.LimeGreen};
  }
`;
