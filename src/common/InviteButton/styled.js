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
    225deg,
    hsl(202.44deg 100% 46.85% / 87%),
    hsl(109deg 100% 25% / 81%),
    hsl(208deg 100% 48% / 83%)
  );
  transition-duration: 1s;

  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 200px;
    height: 50px;
    align-self: center;
    margin: 30px;
    font-size: 16px;
    font-weight: 700;
  }
`;
