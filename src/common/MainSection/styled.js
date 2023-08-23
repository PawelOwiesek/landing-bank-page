import { styled } from "styled-components";
import { ReactComponent as bgIntro } from "./images/bg-intro-desktop.svg";
import { ReactComponent as mobileIntro } from "./images/bg-intro-mobile.svg";

export const Container = styled.div`
  background: linear-gradient(184deg, #8080800d, white);
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${({ theme }) => theme.color.LightGrayishBlue};
  position: relative;
  height: 580px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    margin-left: 0;
    width: auto;
    margin-top: 250px;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 0;
    width: auto;
    margin-top: 250px;
    text-align: center;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  margin-top: 0;
  font-size: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    margin-top: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 35px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.GrayishBlue};
  letter-spacing: 0.2px;
  margin: 0 0 30px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
  }
`;

export const Intro = styled(bgIntro)`
  margin-top: -260px;
  height: 840px;
  right: 0;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    margin-top: -350px;
    height: 650px;
  }
`;

export const IntroMobile = styled(mobileIntro)`
  margin-top: -120px;
  right: 0;
  position: absolute;
`;

export const PhonesImage = styled.img`
  margin-top: -100px;
  position: absolute;
  right: -98px;
  z-index: 2;
  clip-path: polygon(0% 0, 85% 0%, 85% 100%, 0 100%);

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    width: 370px;
    right: 15px;
    clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 290px;
    margin-top: -110px;
  }
`;
