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

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-around;
  }
`;

export const Logo = styled(logo)``;

export const Links = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.color.GrayishBlue};
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    padding-top: 30px;
    margin-top: 70px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 120px;
  }
`;

export const Link = styled.a`
  margin: 0 15px;
  color: ${({ theme }) => theme.color.GrayishBlue};
  text-decoration: none;
  border-bottom: 4px solid ${({ theme }) => theme.color.White};
  cursor: pointer;
  padding: 25px 0 18px;

  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.color.LimeGreen};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      border: none;
      color: ${({ theme }) => theme.color.Crimson};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    color: ${({ theme }) => theme.color.White};
    margin: 10px;
    border: none;
    padding: 0;
  }
`;
