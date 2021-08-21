import React from "react";
import { useContext } from "react";

type ThemeType = "default";

export interface ThemeProperties {
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  primaryColor: string;
  secondaryColor: string;
  lightColor: string;
  blackColor: string;
}

export interface ThemePropsType {
  myTheme: ThemeProperties;
}

export const themeContext = React.createContext({});

interface IProps {
  children: React.ReactNode;
  theme: ThemeType;
}

/**
 * defines theme provider wrapper component as provider
 * @param param0
 * @returns
 */
export const ThemeProvider = ({ children, theme }: IProps) => {
  return (
    <themeContext.Provider
      value={theme === "default" ? defaultTheme : defaultTheme}
    >
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = (): ThemeProperties => {
  return useContext(themeContext) as ThemeProperties;
};

const defaultTheme = {
  bgPrimaryColor: "#fff5e3",
  bgSecondaryColor: "#252525",
  primaryColor: "#ffa600",
  secondaryColor: "#854700",
  lightColor: "#f7f7f7",
  blackColor: "#161616",
};
