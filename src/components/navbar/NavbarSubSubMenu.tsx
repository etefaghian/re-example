import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";
import { SubSubMenuItem } from "./SubSubMenuItem";

export {};

const StyledNavbarSubSubMenu = styled.ul<ThemePropsType>`
  background-color: ${({ myTheme }) => myTheme.primaryColor};
  border: 2px solid ${({ myTheme }) => myTheme.blackColor};
  list-style-type: none;
  position: absolute;
  width: 100%;
  border-radius: 1rem;
  top: 0;
  left: calc(100% + 1rem);
  padding: 1rem 0;
`;

interface IProps {
  subItems: { name: string; href?: string }[];
}

export const NavbarSubSubMenu = ({ subItems }: IProps) => {
  const myTheme = useTheme();

  return (
    <StyledNavbarSubSubMenu myTheme={myTheme}>
      {subItems.map((item) => (
        <SubSubMenuItem {...item}></SubSubMenuItem>
      ))}
    </StyledNavbarSubSubMenu>
  );
};
