import { styled } from "styled-components";

export const Image = styled.img`
  width: 250px;
  height: 170px;
  transition-duration: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;
