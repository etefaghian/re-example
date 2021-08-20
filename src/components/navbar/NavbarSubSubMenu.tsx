import { useState } from "react";
import styled from "styled-components";
import { SubSubMenuItem } from "./SubSubMenuItem";

export {};

const StyledNavbarSubSubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: black;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: calc(100% + 1rem);
`;

interface IProps {
  subItems: { name: string; href?: string }[];
}

export const NavbarSubSubMenu = ({ subItems }: IProps) => {
  const [showSubMenu] = useState(false);

  return (
    <StyledNavbarSubSubMenu>
      {subItems.map((item) => (
        <SubSubMenuItem {...item}></SubSubMenuItem>
      ))}
    </StyledNavbarSubSubMenu>
  );
};
