import { styled } from "styled-components";

export const SubTitle = styled.p`
  font-size: 9px;
`;
export const Content = styled.p`
  color: ${({ theme }) => theme.color.GrayishBlue};
  margin: 30px 0;
`;

export const Link = styled.a`
  text-decoration-line: none;
  cursor: pointer;
`;
