import styled from "styled-components"
import { bgPrimaryColor } from "../../constants/color";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarSearchBar } from "./NavbarSearchBar";

export {}




const  StyledNavbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: #ff9898;
    height: 5.5rem;
    border-radius: 1rem;
    margin: 0 .3rem;
    box-shadow: 0 1rem 1rem rgba(0,0,0,0.3);
    overflow: visible;
`;


export const Navbar = ()=>(<StyledNavbar>
<NavbarMenu></NavbarMenu>
<NavbarSearchBar></NavbarSearchBar>
</StyledNavbar>)

export default Navbar;