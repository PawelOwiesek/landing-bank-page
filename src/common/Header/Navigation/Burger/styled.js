import { styled } from "styled-components";

export const StyledBurger = styled.div`
  width: 40px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 5px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
  }
`;

export const Strip = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ open }) => (open ? "blue" : "green")};
  border-radius: 999px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
