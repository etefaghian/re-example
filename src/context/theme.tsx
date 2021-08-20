import React from "react";
import { useContext } from "react";

export const themeContext = React.createContext({});

interface IProps {
  children: any;
  theme: "light";
}

const lightTheme = {
  bgPrimaryColor: 0,
  bgSecondaryColor: 0,
  primaryColor: 0,
  secondaryColor: 0,
};

export const ThemeProvider = ({ children, theme }: IProps) => {
  return (
    <themeContext.Provider value={theme === "light" ? lightTheme : {}}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};
