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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px 0 30px 100px;
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: repeat(3, 30px);
  column-gap: 70px;
  padding: 70px 230px 0 100px;
`;
export const Logo = styled(logo)`
  color: ${({ theme }) => theme.color.White};
  margin-bottom: 50px;
`;
export const FacebookIcon = styled(facebook)`
  width: 40px;
  height: 40px;
`;
export const InstagramIcon = styled(instagram)`
  width: 40px;
  height: 40px;
`;
export const PinterestIcon = styled(pinterest)`
  width: 40px;
  height: 40px;
`;
export const TwitterIcon = styled(twitter)`
  width: 40px;
  height: 40px;
`;
export const YoutubeIcon = styled(youtube)`
  width: 40px;
  height: 40px;
`;

export const Link = styled.a`
  text-decoration-line: none;
  color: ${({ theme }) => theme.color.White};
  font-size: 12px;
`;

export const Span = styled.p`
  color: ${({ theme }) => theme.color.White};
  margin-left: -90px;
`;
