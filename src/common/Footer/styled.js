import { styled } from "styled-components";
import { ReactComponent as logo } from "../Header/images/logo.svg";
import { ReactComponent as facebook } from "./images/icon-facebook.svg";
import { ReactComponent as instagram } from "./images/icon-instagram.svg";
import { ReactComponent as pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as twitter } from "./images/icon-twitter.svg";
import { ReactComponent as youtube } from "./images/icon-youtube.svg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.DarkBlue};
  display: grid;
  grid-template-columns: auto auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    justify-content: space-around;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px 0 30px 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    margin: 30px 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: center;
    margin: 50px 0 30px 0;
  }
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: repeat(3, 30px);
  column-gap: 70px;
  padding: 70px 230px 0 100px;
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    justify-content: center;
    justify-items: center;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0;
  }
`;

export const Logo = styled(logo)`
  color: ${({ theme }) => theme.color.White};
  margin-bottom: 50px;
`;

const iconStyles = `
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition-duration: 0.5s;
  &:hover{
    transform: scale(1.4);
  }
`;

const StyledIcon = styled.svg`
  ${iconStyles}
`;

export const FacebookIcon = styled(StyledIcon).attrs({ as: facebook })``;
export const InstagramIcon = styled(StyledIcon).attrs({ as: instagram })``;
export const PinterestIcon = styled(StyledIcon).attrs({ as: pinterest })``;
export const TwitterIcon = styled(StyledIcon).attrs({ as: twitter })``;
export const YoutubeIcon = styled(StyledIcon).attrs({ as: youtube })``;

export const Link = styled.a`
  text-decoration-line: none;
  color: ${({ theme }) => theme.color.White};
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.Crimson};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Span = styled.p`
  color: ${({ theme }) => theme.color.White};
  margin-left: -90px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: -30px;
  }
`;
