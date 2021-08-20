import styled from "styled-components"



interface IProps{
    name: string;
    href?: string;
}



const Item = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1rem;

`



const StyledSubMenuItem = styled.li`
    padding: .5rem 0;
    text-transform:initial;
    &:not(:last-child){
        border-bottom: 1px solid white;
    }

`

export const SubMenuItem = ({name, href}: IProps)=>{

    return <StyledSubMenuItem>
    <Item href={href} >{name}</Item>
    </StyledSubMenuItem>

}