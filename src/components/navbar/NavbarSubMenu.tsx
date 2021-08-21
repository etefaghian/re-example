import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";
import { SubMenuItem } from "./SubMenuItem";

interface IProps {
  subItems: { name: string; href?: string }[];
}

const StyledNavbarSubMenu = styled.ul<ThemePropsType>`
  background-color: ${({ myTheme }) => myTheme.bgSecondaryColor};
  box-shadow: 0 0.1rem 3rem ${({ myTheme }) => myTheme.bgPrimaryColor};
  list-style-type: none;
  position: absolute;
  width: 100%;
  border-radius: 1rem;
  top: 5.6rem;
  left: 0;
  padding: 1rem 0;
`;

export const NavbarSubMenu = ({ subItems }: IProps) => {
  const myTheme = useTheme();
  return (
    <StyledNavbarSubMenu myTheme={myTheme}>
      {subItems.map((item) => (
        <SubMenuItem {...item}></SubMenuItem>
      ))}
    </StyledNavbarSubMenu>
  );
};
