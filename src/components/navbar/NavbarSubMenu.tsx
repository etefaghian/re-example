import styled from "styled-components";
import { SubMenuItem } from "./SubMenuItem";

interface IProps {
  subItems: { name: string; href?: string }[];
}

const StyledNavbarSubMenu = styled.ul`
  background-color: black;
  list-style-type: none;
  border: 3px solid blue;
  position: absolute;
  min-width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  top: 6rem;
`;

const onClickHandler = () => {};

export const NavbarSubMenu = ({ subItems }: IProps) => {
  return (
    <StyledNavbarSubMenu>
      {subItems.map((item) => (
        <SubMenuItem {...item}></SubMenuItem>
      ))}
    </StyledNavbarSubMenu>
  );
};
