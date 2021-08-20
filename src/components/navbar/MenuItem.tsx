import { useState } from "react"
import styled from "styled-components"
import { NavbarSubMenu } from "./NavbarSubMenu"

export {}

interface IProps{

    name: string;
    href?: string;
    subItems?: {name: string, href?: string}[]
}


const StyledMenuItem =  styled.li<Partial<IProps>>`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
font-size: 1.2rem;
text-transform: uppercase;
font-weight: 600;
transition: background-color .1s ease-in-out;
position: relative;

:hover{
    background-color: black;
    color: white;
    border-radius: 1rem;
}

::after{
    background-color: hotpink;
    position: absolute;
    top: 3.5rem;
    font-size: 1rem;
    display: ${(props) => props.subItems ? "block" : "none"};;
    width: 2rem;
    height: 2rem;
    content: "llll";
    clip-path: circle(.7rem at 50% 50%);

    }

`


const Item = styled.a`
    text-decoration: none;
    color: white;

`

const toggleSubMenu = ( setState: Function) => setState((preState: boolean)=> !preState  )


export const MenuItem = ({name,href, subItems}: IProps)=>{

    const [showSubMenu, setShowSubMenu] = useState(false)

    return (<StyledMenuItem 
            subItems= {subItems}
            onClick={()=> toggleSubMenu(setShowSubMenu)}>  
                <Item href={href}>{name}</Item>
                {subItems && showSubMenu &&  <NavbarSubMenu subItems={subItems!}></NavbarSubMenu>}
    </StyledMenuItem>)

}