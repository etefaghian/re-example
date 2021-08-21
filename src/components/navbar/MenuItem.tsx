import { useState } from "react";
import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";
import { NavbarSubMenu } from "./NavbarSubMenu";

export {};

interface IProps {
  name: string;
  href?: string;
  subItems?: { name: string; href?: string }[];
}

const StyledMenuItem = styled.li<Partial<IProps> & ThemePropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.1s ease-in-out;
  position: relative;

  :hover {
    background-color: ${(props) => props.myTheme.primaryColor};
    color: white;

    ::after {
      border-color: ${(props) => props.myTheme.blackColor};
    }
  }

  ::after {
    border: solid ${(props) => props.myTheme.primaryColor};

    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 3.5rem;
    font-size: 1rem;
    display: ${(props) => (props.subItems ? "block" : "none")};
    width: 0.8rem;
    height: 0.8rem;
    content: "";
    overflow: hidden;
  }
`;

const Item = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
`;

const toggleSubMenu = (setState: Function) =>
  setState((preState: boolean) => !preState);

export const MenuItem = ({ name, href, subItems }: IProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const theme = useTheme();

  return (
    <StyledMenuItem
      onMouseEnter={() => toggleSubMenu(setShowSubMenu)}
      onMouseLeave={() => toggleSubMenu(setShowSubMenu)}
      subItems={subItems}
      myTheme={theme}
    >
      <Item href={href}>{name}</Item>
      {subItems && showSubMenu && (
        <NavbarSubMenu subItems={subItems!}></NavbarSubMenu>
      )}
    </StyledMenuItem>
  );
};
