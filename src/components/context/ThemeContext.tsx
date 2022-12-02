import React, { useContext } from "react";
import { createContext } from "vm";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.provider value={theme}>{children}</ThemeContext.provider>
  );
};
