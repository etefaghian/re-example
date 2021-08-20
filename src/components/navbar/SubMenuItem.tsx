import { useState } from "react";
import styled from "styled-components";
import { NavbarSubSubMenu } from "./NavbarSubSubMenu";

interface IProps {
  name: string;
  href?: string;
  subItems?: { name: string; href?: string }[];
}

const Item = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
`;

const StyledSubMenuItem = styled.li<IProps>`
  padding: 0.7rem 0.4rem;
  text-transform: initial;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  ::after {
    position: absolute;
    right: 0;
    color: white;
    font-size: 1rem;
    content: ${({ subItems }) => subItems && "'>'"};
  }
`;

export const SubMenuItem = ({ name, href, subItems }: IProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <StyledSubMenuItem {...{ name, href, subItems }}>
      <Item href={href} onClick={() => setShowSubMenu((preState) => !preState)}>
        {name}
      </Item>
      {subItems && showSubMenu && (
        <NavbarSubSubMenu subItems={subItems}></NavbarSubSubMenu>
      )}
    </StyledSubMenuItem>
  );
};
