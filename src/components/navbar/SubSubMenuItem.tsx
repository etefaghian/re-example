import styled from "styled-components";
import { ThemePropsType, useTheme } from "../../context/theme";

export {};

interface IProps {
  name: string;
  href?: string;
}

const StyledSubSubMenuItem = styled.li<ThemePropsType>`
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
        to right,
        ${({ myTheme }) => myTheme.bgSecondaryColor},
        ${({ myTheme }) => myTheme.primaryColor}
      );
    }
  }

  :hover {
    background-color: ${({ myTheme }) => myTheme.blackColor};

    a {
      color: ${({ myTheme }) => myTheme.lightColor};
    }
  }
`;

const StyledItem = styled.a<ThemePropsType>`
  display: block;
  width: calc(100%+5rem);
  color: ${({ myTheme }) => myTheme.blackColor};

  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
`;

export const SubSubMenuItem = ({ name, href }: IProps) => {
  const myTheme = useTheme();

  return (
    <StyledSubSubMenuItem myTheme={myTheme}>
      <StyledItem myTheme={myTheme} href={href}>
        {name}
      </StyledItem>
    </StyledSubSubMenuItem>
  );
};
