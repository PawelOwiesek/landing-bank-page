import { styled } from "styled-components";

export const Container = styled.div`
  background: linear-gradient(184deg, #8080800d, white);
  padding: 0 0 70px 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0;
    text-align: center;
  }
`;

export const Title = styled.h2`
  padding-top: 70px;
  margin-top: 0;
  font-size: 34px;
  font-weight: 300;
`;
