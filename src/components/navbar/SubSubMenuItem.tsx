import styled from "styled-components";

export {};

interface IProps {
  name: string;
  href?: string;
}

const StyledSubSubMenuItem = styled.li`
  list-style-type: none;
  padding: 0.7rem 0.4rem;
  width: 10rem;
  :not(:last-child) {
    border-bottom: 1px solid white;
  }
`;

const StyledItem = styled.a`
  display: block;
  width: calc(100%+5rem);
  color: white;
  font-size: 2rem;
  text-decoration: none;
  font-style: white;
`;

export const SubSubMenuItem = ({ name, href }: IProps) => {
  return (
    <StyledSubSubMenuItem>
      <StyledItem href={href}>{name}</StyledItem>
    </StyledSubSubMenuItem>
  );
};
