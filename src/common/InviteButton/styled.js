import { styled } from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.White};
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 25px;
  font-size: 12px;
  cursor: pointer;
  background: linear-gradient(
    267deg,
    hsl(191.44deg 117.5% 49.95%),
    hsl(133deg 100% 52.13% / 99%)
  );
  transition-duration: 1s;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    width: 200px;
    height: 50px;
    align-self: center;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 30px;
  }
`;
