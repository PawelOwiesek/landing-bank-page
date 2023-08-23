import { styled } from "styled-components";
import { ReactComponent as bgIntro } from "./images/bg-intro-desktop.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${({ theme }) => theme.color.LightGrayishBlue};
  position: relative;
  height: 580px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  width: 400px;
`;
export const Title = styled.h1`
  margin-top: 0;
  font-size: 45px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.GrayishBlue};
  letter-spacing: 0.2px;
  margin: 0 0 30px;
`;

export const Intro = styled(bgIntro)`
  margin-top: -260px;
  height: 840px;
  right: 0;
  position: absolute;
`;

export const PhonesImage = styled.img`
  margin-top: -100px;
  position: absolute;
  right: -98px;
  z-index: 2;
  clip-path: polygon(0% 0, 85% 0%, 85% 100%, 0 100%);
`;
