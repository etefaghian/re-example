import styled from "styled-components";
import { SubMenuItem } from "./SubMenuItem";

interface IProps {
  subItems: { name: string; href?: string }[];
}

const StyledNavbarSubMenu = styled.ul`
  background-color: black;
  list-style-type: none;
  position: absolute;
  width: calc(100% + 3rem);
  border-radius: 1rem;
  top: 6rem;
  left: 0;
  padding: 1rem 0;
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
