import styled from "styled-components";
import { MenuItem } from "./MenuItem";

export {};

const obj = [
  { name: "menu1", href: "#" },
  { name: "me2", href: "#" },
  { name: "menu 333", href: "#" },

  { name: "menu3", href: "#" },
  { name: "menu4", href: "#" },
  {
    name: "menu menu 5",
    href: "#",
    subItems: [
      {
        name: "sub1",
        href: "#",

        subItems: [
          { name: "menu1", href: "#" },
          { name: "me2", href: "#" },
          { name: "menu 333", href: "#" },
          { name: "menu3", href: "#" },
          { name: "menu4", href: "#" },
          ,
        ],
      },
      { name: "sub2", href: "#" },
      { name: "sub3", href: "#" },
      { name: "sub4", href: "#" },
    ],
  },
];

const StyledNavbarMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  list-style-type: none;
`;

export const NavbarMenu = () => {
  return (
    <StyledNavbarMenu>
      {obj.map((item) => (
        <MenuItem {...item}></MenuItem>
      ))}
    </StyledNavbarMenu>
  );
};
