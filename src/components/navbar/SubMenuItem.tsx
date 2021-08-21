import { useState } from "react";
import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";
import { NavbarSubSubMenu } from "./NavbarSubSubMenu";

interface IProps {
  name: string;
  href?: string;
  subItems?: { name: string; href?: string }[];
}

const Item = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
`;

const StyledSubMenuItem = styled.li<IProps & ThemePropsType>`
  padding: 0.7rem 0.4rem;
  text-transform: initial;
  position: relative;

  //add line with psudo-element
  &:not(:first-child) {
    &::before {
      position: absolute;
      bottom: 100%;
      left: 0;
      content: "";
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        to left,
        ${({ myTheme }) => myTheme.bgSecondaryColor},
        ${({ myTheme }) => myTheme.primaryColor}
      );
    }
  }
  ::after {
    position: absolute;
    right: 10%;
    color: ${({ myTheme }) => myTheme.primaryColor};
    font-size: 1.3rem;
    font-weight: bold;
    content: ${({ subItems }) => subItems && "'>'"};
  }

  :hover {
    background-color: ${({ myTheme }) => myTheme.primaryColor};
    ::after {
      color: ${({ myTheme }) => myTheme.lightColor};
    }
  }
`;

export const SubMenuItem = ({ name, href, subItems }: IProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const myTheme = useTheme();

  return (
    <StyledSubMenuItem {...{ name, href, subItems }} myTheme={myTheme}>
      <Item href={href} onClick={() => setShowSubMenu((preState) => !preState)}>
        {name}
      </Item>
      {subItems && showSubMenu && (
        <NavbarSubSubMenu subItems={subItems}></NavbarSubSubMenu>
      )}
    </StyledSubMenuItem>
  );
};
