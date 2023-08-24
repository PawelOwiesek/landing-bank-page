import { useState } from "react";
import { Strip, StyledBurger } from "./styled";
import RightNav from "../RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Strip open={open} />
        <Strip open={open} />
        <Strip open={open} />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
