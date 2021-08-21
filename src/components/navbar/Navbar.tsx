import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarSearchBar } from "./NavbarSearchBar";

export {};

const StyledNavbar = styled.nav<ThemePropsType>`
  position: sticky;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid ${(props) => props.myTheme.primaryColor};
  padding: 0 2rem;
  background-color: ${({ myTheme }) => myTheme.bgSecondaryColor};
  height: 5.5rem;
  border-radius: 1rem;
  margin: 0 0.3rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  overflow: visible;
`;

export const Navbar = () => {
  const theme = useTheme();

  return (
    <StyledNavbar myTheme={theme}>
      <NavbarMenu></NavbarMenu>
      <NavbarSearchBar></NavbarSearchBar>
    </StyledNavbar>
  );
};

export default Navbar;
